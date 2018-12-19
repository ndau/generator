package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/oneiro-ndev/generator/pkg/txgen"
)

var (
	template = flag.String("template", txgen.DefaultTemplatePath, "template to generate")
	output   = flag.String("output", txgen.DefaultOutputPath, "path to output file")
)

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func main() {
	flag.Parse()
	tmpl, err := txgen.ParseTemplate(*template)
	check(err)
	context, err := txgen.MakeContext()
	check(err)
	check(txgen.ApplyTemplate(tmpl, context, *output))
}
