package nomsify

import (
	"fmt"
	"io"
)

// TODO: replace this with a template
func writeHeader(pkg string, out io.Writer) error {
	return tmpl.ExecuteTemplate(out, "header", pkg)
}

// Implement MarshalNoms and UnmarshalNoms for the given type implemented at the given path.
//
// Writes the generated code to the supplied writer.
func Implement(path, typeName string, out io.Writer) (err error) {
	context := getContext(path, typeName)
	err = tmpl.ExecuteTemplate(out, "marshal_noms", context)
	if err != nil {
		return
	}
	// TODO: this is a mostly-unimplemented WIP doing only enough to get started
	// TODO: replace this with a template
	fmt.Fprintf(out, "func (i *%s) UnmarshalNoms(nt.Value) error {\n\treturn errors.New(\"unimplemented\")\n}\n\n", typeName)
	return err
}

// TODO: this should do some AST parsing to construct a real context object
func getContext(path, typeName string) map[string]string {
	return make(map[string]string)
}
