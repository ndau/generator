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
	"strings"
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

func (c context) HasPrefix() string {
	return hasPrefix
}

func (c context) CoreFields() []field {
	return c.getFields(true, false)
}

func (c context) ManagedFields() []field {
	return c.getFields(false, true)
}

func (c context) AllFields() []field {
	return c.getFields(true, true)
}

func (c context) SortedCoreFields() []field {
	return c.sortFields(c.CoreFields())
}

func (c context) SortedManagedFields() []field {
	return c.sortFields(c.ManagedFields())
}

func (c context) SortedAllFields() []field {
	return c.sortFields(c.AllFields())
}

func (c context) TotalSortedFieldCount() int {
	return len(c.SortedAllFields())
}

func (c context) HasManagedVars() bool {
	return len(c.ManagedFields()) > 0
}

func (c context) ManagedVarName() string {
	return "managedVar"
}

func (c context) ManagedVarsMap() string {
	return xPrefix + "managedVars"
}

func (c context) IsManagedVar(name string) bool {
	return strings.HasPrefix(name, c.ManagedVarName()) || strings.HasPrefix(name, hasPrefix + c.ManagedVarName())
}

func (c context) getFields(wantCore, wantManaged bool) []field {
	structDef, ok := c.typeNode.Type.(*ast.StructType)
	if !ok {
		return nil
	}
	fields := make([]field, 0, structDef.Fields.NumFields())
	for _, fAST := range structDef.Fields.List {
		for _, fN := range fAST.Names {
			isManaged := c.IsManagedVar(fN.Name)
			if wantCore && !isManaged || wantManaged && isManaged {
				fields = append(fields, c.newField(fN.Name, fAST))
			}
		}
	}
	return fields
}

func (c context) sortFields(fields []field) []field {
	ptrspecifiers := make([]field, 0, len(fields))
	for _, f := range fields {
		if f.IsPointer() {
			ptrspecifiers = append(ptrspecifiers, field{
				Name:         xHasPrefix + f.BareName(),
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
