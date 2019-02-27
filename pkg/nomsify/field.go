package nomsify

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/printer"
	"reflect"
	"strings"
)

type field struct {
	Name         string
	definition   *ast.Field
	expr         ast.Expr
	typeOverride string
	context      *context
}

func (c context) newField(name string, definition *ast.Field) field {
	f := field{
		Name:       "x." + name,
		definition: definition,
		expr:       definition.Type,
		context:    &c,
	}
	return f
}

func (f field) Expr() string {
	return fmt.Sprint(reflect.TypeOf(f.expr))
}

func (f field) Inner(name string) field {
	i := field{
		Name:    name,
		context: f.context,
	}
	switch x := f.expr.(type) {
	case *ast.ArrayType:
		i.expr = x.Elt
	case *ast.SliceExpr:
		i.expr = x.X
	case *ast.StarExpr:
		i.expr = x.X
		// don't forget to dereference the literals
		i.Name = fmt.Sprintf("(*%s)", i.Name)
	}
	return i
}

func (f field) IsNumeric() bool {
	switch f.Type() {
	case "int", "int8", "int16", "int32", "int64", "uint", "uint8", "uint16", "uint32", "uint64", "eai.Rate", "math.Ndau", "math.Timestamp", "math.Duration":
		return true
	}
	return false
}

func (f field) IsPointer() bool {
	_, ok := f.expr.(*ast.StarExpr)
	return ok
}

func (f field) IsPrimitive() bool {
	if f.IsNumeric() {
		return true
	}

	switch f.Type() {
	case "bool", "string", "[]byte":
		return true
	}

	return false
}

func (f field) IsSet() bool {
	return f.Type() == "map[string]struct{}"
}

func (f field) IsSlice() bool {
	switch f.expr.(type) {
	case *ast.ArrayType:
		return true
	}
	return false
}

func (f field) IsTextMarshaler() bool {
	// what we want is to automatically determine whether a type
	// implements TextMarshaler: automatically construct an instance somehow,
	// then attempt a cast to encoding.TextMarshaler. That's really kind of
	// difficult, though, so instead we cheat, and just use a hard-coded
	// list of known types implementing that interface.
	switch f.Type() {
	case "address.Address", "signature.PublicKey", "signature.PrivateKey", "signature.Signature":
		return true
	}
	return false
}

func (f field) LocalName() string {
	safe := strings.ReplaceAll(f.Name, "*", "")
	safe = strings.ReplaceAll(safe, "(", "")
	safe = strings.ReplaceAll(safe, ")", "")
	parts := strings.Split(safe, ".")
	return lowerFirst(parts[len(parts)-1])
}

func (f field) MarshalPrimitive(expr string) string {
	if f.IsNumeric() {
		return fmt.Sprintf("util.Int(%s).NomsValue()", expr)
	}
	// we need special handling for HasX injected fields
	if strings.Contains(expr, "Has") {
		return fmt.Sprintf("nt.Bool(%s != nil)", strings.ReplaceAll(expr, "Has", ""))
	}
	switch f.Type() {
	case "bool":
		return fmt.Sprintf("nt.Bool(%s)", expr)
	case "string", "[]byte":
		return fmt.Sprintf("nt.String(%s)", expr)
	}

	return expr
}

func (f field) MarshalZero() string {
	if f.IsNumeric() {
		return f.MarshalPrimitive("0")
	}
	if f.IsTextMarshaler() {
		return "nt.String(\"\")"
	}
	switch f.Type() {
	case "bool":
		return f.MarshalPrimitive("false")
	case "string":
		return f.MarshalPrimitive("\"\"")
	}
	// this means that within noms, every possibly-nil struct has type
	// <Bool|Struct>. Since we always check the HasX guards and don't attempt
	// to unmarshal if not set, I think this is probably fine.
	return "nt.Bool(false)"
}

func (f field) Type() string {
	if f.typeOverride != "" {
		return f.typeOverride
	}
	var buf bytes.Buffer
	printer.Fprint(&buf, f.context.fset, f.expr)
	return buf.String()
}

func (f field) Zero() string {
	if f.IsPointer() || f.IsSlice() {
		return "nil"
	}
	if f.IsNumeric() {
		return fmt.Sprintf("%s(0)", f.Type())
	}
	return fmt.Sprintf("%s{}", f.Type())
}
