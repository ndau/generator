package nomsify

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
