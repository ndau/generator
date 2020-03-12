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
	"flag"
	"fmt"
	"os"
	"path/filepath"

	"github.com/ndau/generator/pkg/txgen"
)

var (
	template = flag.String("template", "", "template to generate")
	output   = flag.String("output", "", "path to output file")
	verbose  = flag.Bool("verbose", false, "emit additional information")
)

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func generate(template, output string, context *txgen.Context) {
	if *verbose {
		_, name := filepath.Split(template)
		fmt.Printf("parsing %s...", name)
	}
	tmpl, err := txgen.ParseTemplate(template)
	if *verbose && err != nil {
		fmt.Println()
	}
	check(err)
	if *verbose {
		fmt.Println(" applying...")
	}
	check(txgen.ApplyTemplate(tmpl, context, output))
}

func main() {
	flag.Parse()

	context, err := txgen.MakeContext()
	check(err)

	if template != nil && *template != "" && output != nil && *output != "" {
		// if flags are set, just generate the template specified
		generate(*template, *output, context)
		os.Exit(0)
	}

	// otherwise, go through the whole list
	type to struct {
		t string
		o string
	}

	tos := []to{
		{txgen.JSONLiteralsTemplatePath, txgen.JSONLiteralsOutputPath},
		{txgen.ConstructorsTemplatePath, txgen.ConstructorsOutputPath},
		{txgen.SignableBytesTemplatePath, txgen.SignableBytesOutputPath},
		{txgen.MaketestsTemplatePath, txgen.MaketestsOutputPath},
	}

	for _, to := range tos {
		generate(to.t, to.o, context)
	}
}
