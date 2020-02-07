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
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"text/template"
	"unicode"
	"unicode/utf8"
)

const (
	prefixPath        = "$GOPATH/src/github.com/oneiro-ndev/generator/templates/nomsify/"
	headerPath        = "header.go.tmpl"
	marshalNomsPath   = "marshal_noms.go.tmpl"
	unmarshalNomsPath = "unmarshal_noms.go.tmpl"
)

var (
	tmpl *template.Template
)

func init() {
	var err error

	prefix := os.ExpandEnv(filepath.FromSlash(prefixPath))
	header := filepath.Join(prefix, headerPath)
	marshalNoms := filepath.Join(prefix, marshalNomsPath)
	unmarshalNoms := filepath.Join(prefix, unmarshalNomsPath)

	tmpl, err = template.New("header").Funcs(template.FuncMap{
		"Deref":      deref,
		"LowerFirst": lowerFirst,
	}).ParseFiles(header, marshalNoms, unmarshalNoms)
	if err != nil {
		panic(err)
	}
}

func lowerFirst(s string) string {
	if len(s) <= 1 {
		return strings.ToLower(s)
	}
	r, l := utf8.DecodeRuneInString(s)
	r = unicode.ToLower(r)
	return string(r) + s[l:]
}

func deref(s string) string {
	return fmt.Sprintf("(*%s)", s)
}
