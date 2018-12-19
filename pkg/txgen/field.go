package txgen

import (
	"fmt"
	"strings"
)

// Field stores metadata about a field
type Field struct {
	Name          string
	Type          string
	Transaction   *Transaction
	Length        func(string) string
	Bytes         func(string) string
	FallibleBytes bool
}

// NewField creates a new Field struct
func NewField(name, nativeType string, tx *Transaction) Field {
	f := Field{
		Name:        name,
		Type:        nativeType,
		Transaction: tx,
	}
	f.fillFieldFromType()
	return f
}

func (f *Field) fillFieldFromType() error {
	switch f.Type {
	case "string", "[]byte":
		f.Length = func(s string) string { return fmt.Sprintf("len(%s)", s) }
		f.Bytes = func(s string) string { return fmt.Sprintf("[]byte(%s)", s) }
	case "int64", "uint64", "math.Ndau", "math.Duration":
		f.Length = func(string) string { return "8" }
		f.Bytes = func(s string) string { return fmt.Sprintf("intbytes(uint64(%s))", s) }
	case "byte":
		f.Length = func(string) string { return "1" }
		f.Bytes = func(s string) string { return fmt.Sprintf("[]byte{%s}", s) }
	case "address.Address":
		f.Length = func(string) string { return "address.AddrLength" }
		f.Bytes = func(s string) string { return fmt.Sprintf("[]byte(%s.String())", s) }
	case "signature.PublicKey", "[]signature.PublicKey", "signature.Signature", "[]signature.Signature":
		f.Length = func(s string) string { return fmt.Sprintf("%s.Msgsize()", s) }
		f.Bytes = func(s string) string { return fmt.Sprintf("%s.MarshalMsg(nil)", s) }
		f.FallibleBytes = true

	default:
		return fmt.Errorf("unknown type: %s", f.Type)
	}

	return nil
}

// LiteralName returns an appropriate literal name for an instance of this field
func (f *Field) LiteralName() string {
	return fmt.Sprintf(
		"%s%s",
		strings.ToLower(f.Transaction.Name),
		strings.Title(f.Name),
	)
}

// IsSlice is true when the field type is a slice
func (f *Field) IsSlice() bool {
	return f.Type != "[]byte" && strings.HasPrefix(f.Type, "[]")
}

// IsSignature is true if the field is a signature field
func (f *Field) IsSignature() bool {
	return strings.EqualFold(f.Name, "signature") || strings.EqualFold(f.Name, "signatures")
}
