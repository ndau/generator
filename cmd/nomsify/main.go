package main

// ----- ---- --- -- -
// Copyright 2019, 2020 The Axiom Foundation. All Rights Reserved.
//
// Licensed under the Apache License 2.0 (the "License").  You may not use
// this file except in compliance with the License.  You can obtain a copy
// in the file LICENSE in the source distribution or at
// https://www.apache.org/licenses/LICENSE-2.0.txt
// - -- --- ---- -----


import (
	"errors"
	"flag"
	"fmt"
	"os"

	"github.com/ndau/generator/pkg/nomsify"
)

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

var (
	verbose = flag.Bool("v", false, "emit extra info when set")
)

func main() {
	flag.Parse()
	pkg := flag.Arg(0)
	if pkg == "" {
		check(errors.New("must specify path to package to nomsify"))
	}
	err := nomsify.Scan(pkg, verbose)
	check(err)
	if *verbose {
		fmt.Println("OK")
	}
}
