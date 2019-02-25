package nomsify

import (
	"fmt"
	"io"
)

// TODO: replace this with a template
func writeHeader(pkg string, out io.Writer) {
	fmt.Fprintf(out, "package %s\n\n", pkg)
	fmt.Fprintln(out, "import (")
	fmt.Fprintln(out, "	\"errors\"")
	fmt.Fprintln(out, "	nt \"github.com/attic-labs/noms/go/types\"")
	fmt.Fprintln(out, ")")
	fmt.Fprintln(out)
}

// Implement MarshalNoms and UnmarshalNoms for the given type implemented at the given path.
//
// Writes the generated code to the supplied writer.
func Implement(path, typeName string, out io.Writer) error {
	// TODO: this is a mostly-unimplemented WIP doing only enough to get started
	// TODO: replace this with a template
	fmt.Fprintf(out, "func (i %s) MarshalNoms(vrw nt.ValueReadWriter) (nt.Value, error) {\n\treturn nil, errors.New(\"unimplemented\")\n}\n\n", typeName)
	fmt.Fprintf(out, "func (i *%s) UnmarshalNoms(nt.Value) error {\n\treturn errors.New(\"unimplemented\")\n}\n\n", typeName)
	return nil
}
