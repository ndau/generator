package nomsify

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
	prefixPath      = "$GOPATH/src/github.com/oneiro-ndev/generator/templates/nomsify/"
	headerPath      = "header.go.tmpl"
	marshalNomsPath = "marshal_noms.go.tmpl"
)

var (
	tmpl *template.Template
)

func init() {
	var err error

	prefix := os.ExpandEnv(filepath.FromSlash(prefixPath))
	header := filepath.Join(prefix, headerPath)
	marshalNoms := filepath.Join(prefix, marshalNomsPath)

	tmpl, err = template.New("header").Funcs(template.FuncMap{
		"IsNomsMarshaler": isNomsMarshaler,
		"IsPointer":       isPointer,
		"IsSlice":         isSlice,
		"IsTextMarshaler": isTextMarshaler,
		"LowerFirst":      lowerFirst,
		"Primitive":       primitive,
		"Zero":            zero,
	}).ParseFiles(header, marshalNoms)
	if err != nil {
		panic(err)
	}
}

func isSlice(s string) bool {
	return strings.HasPrefix(s, "[]")
}

func lowerFirst(s string) string {
	if len(s) <= 1 {
		return strings.ToLower(s)
	}
	r, l := utf8.DecodeRuneInString(s)
	r = unicode.ToLower(r)
	return string(r) + s[l:]
}

func zero(s string) string {
	return fmt.Sprintf("*new(%s)", s)
}

// TODO: from here on, these functions need to get real implementations

func isPointer(s string) bool {
	return strings.HasPrefix(s, "*")
}

func isTextMarshaler(s string) bool {
	return false
}

func isNomsMarshaler(s string) bool {
	return false
}

func primitive(s string) string {
	return s
}
