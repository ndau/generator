package nomsify

// ----- ---- --- -- -
// Copyright 2019, 2020 The Axiom Foundation. All Rights Reserved.
//
// Licensed under the Apache License 2.0 (the "License").  You may not use
// this file except in compliance with the License.  You can obtain a copy
// in the file LICENSE in the source distribution or at
// https://www.apache.org/licenses/LICENSE-2.0.txt
// - -- --- ---- -----


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
