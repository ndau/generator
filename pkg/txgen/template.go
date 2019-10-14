package txgen

// ----- ---- --- -- -
// Copyright 2019 Oneiro NA, Inc. All Rights Reserved.
//
// Licensed under the Apache License 2.0 (the "License").  You may not use
// this file except in compliance with the License.  You can obtain a copy
// in the file LICENSE in the source distribution or at
// https://www.apache.org/licenses/LICENSE-2.0.txt
// - -- --- ---- -----

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

func quote(s string) string {
	return fmt.Sprintf("\"%s\"", s)
}

func stripSignatures(s string) string {
	m := make(map[string]interface{})
	err := json.Unmarshal([]byte(s), &m)
	if err != nil {
		panic(err)
	}
	n := make(map[string]interface{})
	for k, v := range m {
		if !strings.EqualFold(k, "signature") && !strings.EqualFold(k, "signatures") {
			n[k] = v
		}
	}
	js, err := json.Marshal(n)
	if err != nil {
		panic(err)
	}
	return string(js)
}

// ParseTemplate parses the template definition
func ParseTemplate(path string) (*template.Template, error) {
	_, templateName := filepath.Split(path)
	return template.New(templateName).Funcs(template.FuncMap{
		"Base64":          base64.StdEncoding.EncodeToString,
		"ByteLiteral":     byteS,
		"BytesLiteral":    bytesS,
		"Lower":           strings.ToLower,
		"Quote":           quote,
		"StripSignatures": stripSignatures,
	}).ParseFiles(path)
}

// ApplyTemplate applies the template to the transaction
func ApplyTemplate(t *template.Template, c *Context, output string) error {
	// ensure output directory exists
	dir, _ := filepath.Split(output)
	err := os.MkdirAll(dir, 0700)
	if err != nil {
		return err
	}

	f, err := os.Create(output)
	if err != nil {
		return err
	}
	defer f.Close()

	return t.ExecuteTemplate(f, t.Name(), *c)
}
