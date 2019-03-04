package nomsify

import (
	"bufio"
	"os"
)

// GeneratedNameFor returns the path for a generated file based on the input path.
//
// It assumes that the input path is a filename ending in ".go"
func GeneratedNameFor(path string) string {
	return path[:len(path)-3] + "_noms_gen.go"
}

// create a buffered writer to the generated file
func initGenerated(fromPath string, pkg string) (*bufio.Writer, *os.File, error) {
	f, err := os.Create(GeneratedNameFor(fromPath))
	if err != nil {
		return nil, f, err
	}
	w := bufio.NewWriter(f)

	err = writeHeader(pkg, w)
	return w, f, err
}
