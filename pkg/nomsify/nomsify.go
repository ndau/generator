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
	"io"
)

// TODO: replace this with a template
func writeHeader(pkg string, out io.Writer) error {
	return tmpl.ExecuteTemplate(out, "header", pkg)
}

// Implement MarshalNoms and UnmarshalNoms for the given type implemented at the given path.
//
// Writes the generated code to the supplied writer.
func Implement(path, typeName string, out io.Writer) error {
	context, err := getContext(path, typeName)
	if err != nil {
		return err
	}
	err = tmpl.ExecuteTemplate(out, "marshal_noms", context)
	if err != nil {
		return err
	}
	err = tmpl.ExecuteTemplate(out, "unmarshal_noms", context)
	if err != nil {
		return err
	}

	return err
}
