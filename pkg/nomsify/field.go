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
	"bytes"
	"fmt"
	"go/ast"
	"go/printer"
	"reflect"
	"strings"
)

const (
	xPrefix    = "x."
	hasPrefix  = "Has"
	xHasPrefix = xPrefix + hasPrefix
)

type field struct {
	Name          string
	definition    *ast.Field
	expr          ast.Expr
	typeOverride  string
	valueOverride string
	Context       *context
}

func (c context) newField(name string, definition *ast.Field) field {
	f := field{
		Name:       xPrefix + name,
		definition: definition,
		expr:       definition.Type,
		Context:    &c,
	}
	return f
}

func (f field) BareName() string {
	name := f.Name
	if strings.HasPrefix(name, "(*") && strings.HasSuffix(name, ")") {
		name = name[2 : len(name)-1]
	}
	fields := strings.Split(name, ".")
	return fields[len(fields)-1]
}

func (f field) IsManagedVar() bool {
	return f.Context.IsManagedVar(f.BareName())
}

func (f field) IsManagedVarsMap() bool {
	return f.Name == f.ManagedVarsMap()
}

func (f field) ManagedVarBaseName() string {
	name := f.BareName()
	// Return the special managedVars map name intact.
	if f.IsManagedVarsMap() {
		return name
	}
	// Strip off the "Has" prefix if there is one.
	if strings.HasPrefix(name, hasPrefix) {
		name = strings.TrimPrefix(name, hasPrefix)
	}
	return strings.TrimPrefix(name, f.Context.ManagedVarName())
}

func (f field) ManagedVarsMap() string {
	return f.Context.ManagedVarsMap()
}

func (f field) Expr() string {
	return fmt.Sprint(reflect.TypeOf(f.expr))
}

func (f field) Inner(name string) field {
	i := field{
		Name:    name,
		Context: f.Context,
	}
	switch x := f.expr.(type) {
	case *ast.ArrayType:
		i.expr = x.Elt
	case *ast.MapType:
		i.expr = x.Value
	case *ast.SliceExpr:
		i.expr = x.X
	case *ast.StarExpr:
		i.expr = x.X
	}
	return i
}

func (f field) InnerValue(name, value string) field {
	i := f.Inner(name)
	i.valueOverride = value
	return i
}

func (f field) IsCollection() bool {
	return f.Type() != "[]byte" && f.IsSlice() || f.IsSet() || f.IsMap()
}

func (f field) IsMap() bool {
	return strings.HasPrefix(f.Type(), "map[string]")
}

func (f field) IsNumeric() bool {
	switch f.Type() {
	case "int", "int8", "int16", "int32", "int64", "uint", "uint8", "uint16", "uint32", "uint64", "eai.Rate", "math.Ndau", "math.Timestamp", "math.Duration", "pricecurve.Nanocent":
		return true
	}
	return false
}

func (f field) IsNomsMarshaler() bool {
	switch {
	case f.IsPointer():
		return f.Inner("").IsNomsMarshaler()
	case f.IsPrimitive(), f.IsSet(), f.IsMap(), f.IsSlice(), f.IsTextMarshaler():
		return false
	default:
		return true
	}
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

func (f field) MakeLocal() string {
	return lowerFirst(f.BareName())
}

func (f field) MarshalPrimitive(expr string) string {
	if f.IsNumeric() {
		return fmt.Sprintf("util.Int(%s).NomsValue()", expr)
	}
	// we need special handling for HasX injected fields
	if strings.HasPrefix(expr, xHasPrefix) {
		return fmt.Sprintf("nt.Bool(%s%s != nil)", xPrefix, strings.TrimPrefix(expr, xHasPrefix))
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

func (f field) NomsType() string {
	switch {
	case f.IsPointer():
		return f.Inner("").NomsType()
	case f.IsNomsMarshaler():
		return "nt.Struct"
	case f.IsSet():
		return "nt.Set"
	case f.IsMap():
		return "nt.Map"
	case f.Type() == "[]byte":
		return "nt.String"
	case f.IsSlice():
		return "nt.List"
	case f.Type() == "bool":
		return "nt.Bool"
	default:
		return "nt.String"
	}
}

func (f field) Type() string {
	if f.typeOverride != "" {
		return f.typeOverride
	}
	var buf bytes.Buffer
	printer.Fprint(&buf, f.Context.fset, f.expr)
	return buf.String()
}

func (f field) StructType() string {
	return f.Context.Type()
}

func (f field) Value() string {
	if f.valueOverride == "" {
		return "value"
	}
	return f.valueOverride
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
