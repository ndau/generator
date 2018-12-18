package main

import (
	"fmt"
	"os"

	"github.com/oneiro-ndev/generator/pkg/txjson"
)

func check(err error) {
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}

func main() {
	tmpl, err := txjson.ParseTemplate()
	check(err)
	context, err := txjson.MakeContext()
	check(err)
	check(txjson.ApplyTemplate(tmpl, context))
}
