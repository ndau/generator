package nomsify

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/parser"
	"go/printer"
	"go/token"
	"os"
	"sort"
)

type context struct {
	fset     *token.FileSet
	file     *ast.File
	typeNode *ast.TypeSpec
}

// find a node by name and set it
func (c *context) scan(name string) {
	ast.Inspect(c.file, func(node ast.Node) (recurseInto bool) {
		if ts, ok := node.(*ast.TypeSpec); ok {
			if ts.Name.Name == name {
				c.typeNode = ts
			}
		}
		return true
	})
}

// Package gets the package for the file stored in this context
func (c context) Package() string {
	var buf bytes.Buffer
	err := printer.Fprint(&buf, c.fset, c.file.Package)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}
	return buf.String()
}

func (c context) Type() string {
	return c.typeNode.Name.Name
}

func (c context) Fields() []field {
	structDef, ok := c.typeNode.Type.(*ast.StructType)
	if !ok {
		return nil
	}
	fields := make([]field, 0, structDef.Fields.NumFields())
	for _, fAST := range structDef.Fields.List {
		for _, fN := range fAST.Names {
			fields = append(fields, c.newField(fN.Name, fAST))
		}
	}
	return fields
}

func (c context) SortedFields() []field {
	fields := c.Fields()
	ptrspecifiers := make([]field, 0, len(fields))
	for _, f := range fields {
		if f.IsPointer() {
			ptrspecifiers = append(ptrspecifiers, field{
				Name:         "x.Has" + f.BareName(),
				typeOverride: "bool",
				Context:      &c,
			})
		}
	}
	fields = append(fields, ptrspecifiers...)

	sort.Slice(fields, func(i, j int) bool { return fields[i].BareName() < fields[j].BareName() })
	return fields
}

func parse(path string) (context, error) {
	fset := token.NewFileSet()
	file, err := parser.ParseFile(
		fset,
		path,
		nil,
		0,
	)
	return context{
		fset: fset,
		file: file,
	}, err
}

func getContext(path, typeName string) (context, error) {
	ctx, err := parse(path)
	if err != nil {
		return ctx, err
	}
	ctx.scan(typeName)
	if ctx.typeNode == nil {
		err = fmt.Errorf("type %s definition not found in %s", typeName, path)
	}
	return ctx, err
}
