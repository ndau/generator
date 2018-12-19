package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/oneiro-ndev/generator/pkg/txgen_test"
)

var (
	template = flag.String("template", txgen_test.DefaultTemplatePath, "template to generate")
	output   = flag.String("output", txgen_test.DefaultOutputPath, "path to output file")
	verbose  = flag.Bool("verbose", false, "emit additional information")
)

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func main() {
	flag.Parse()
	tmpl, err := txgen_test.ParseTemplate(*template)
	check(err)
	context, err := txgen_test.MakeContext()
	check(err)
	check(txgen_test.ApplyTemplate(tmpl, context, *output))
	if *verbose {
		fmt.Println("OK")
	}
}
