package main

import (
	"errors"
	"flag"
	"fmt"
	"os"

	"github.com/oneiro-ndev/generator/pkg/nomsify"
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
