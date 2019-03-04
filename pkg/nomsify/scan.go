package nomsify

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

// We use these regular expressions to inspect go source files and determine
// what to nomsify
const (
	NomsifyRe = `(?m:^//nomsify (.*)$)`
	PackageRe = `(?m:^package (\w+)$)`
)

var (
	regex     *regexp.Regexp
	packageRe *regexp.Regexp
)

func init() {
	regex = regexp.MustCompile(NomsifyRe)
	packageRe = regexp.MustCompile(PackageRe)
}

// Scan the go package at the given path and nomsify all specified types within.
func Scan(path string, verbose *bool) error {
	return filepath.Walk(path, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() || !strings.HasSuffix(strings.ToLower(path), ".go") {
			// we don't have anything to do in the case of directories and non-go files
			return nil
		}

		if *verbose {
			fmt.Printf("Scanning %s: ", path)
			defer func() {
				if err == nil {
					fmt.Println("OK")
				} else {
					fmt.Println(err)
				}
			}()
		}

		fileData, err := ioutil.ReadFile(path)
		if err != nil {
			return fmt.Errorf("nomsify/scan.walker->%s: %s", path, err)
		}
		fileContents := string(fileData)

		filePackageMatch := packageRe.FindStringSubmatch(fileContents)
		if filePackageMatch == nil {
			return fmt.Errorf("%s doesn't declare a package", path)
		}
		// this should never panic, because PackageRe declares a single non-optional capturing group
		filePackage := filePackageMatch[1]

		// create a writer to the generated file. We'll pass this around so we can
		// efficiently collect data without a ton of FS operations.
		writer, f, err := initGenerated(path, filePackage)
		if err != nil {
			return err
		}
		foundNomsifyInstruction := false
		defer func() {
			writer.Flush()
			f.Close()
			if !foundNomsifyInstruction {
				os.Remove(f.Name())
			}
		}()

		for _, lineMatches := range regex.FindAllStringSubmatch(fileContents, -1) {
			typesS := lineMatches[1]
			types := strings.Fields(typesS)
			for _, ty := range types {
				foundNomsifyInstruction = true
				err = Implement(path, ty, writer)
				if err != nil {
					return err
				}
			}
		}

		return err
	})
}
