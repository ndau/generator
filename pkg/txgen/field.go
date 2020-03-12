package txgen

// ----- ---- --- -- -
// Copyright 2019, 2020 The Axiom Foundation. All Rights Reserved.
//
// Licensed under the Apache License 2.0 (the "License").  You may not use
// this file except in compliance with the License.  You can obtain a copy
// in the file LICENSE in the source distribution or at
// https://www.apache.org/licenses/LICENSE-2.0.txt
// - -- --- ---- -----


import (
	"encoding/base64"
	"fmt"
	"math/rand"
	"reflect"
	"strings"

	"github.com/ndau/ndaumath/pkg/address"
	"github.com/ndau/ndaumath/pkg/pricecurve"
	"github.com/ndau/ndaumath/pkg/signature"
	math "github.com/ndau/ndaumath/pkg/types"
)

const maxJSInt = 9007199254740991

// Field stores metadata about a field
type Field struct {
	Name        string
	Type        string
	Transaction *Transaction

	newLiteral      string
	FallibleLiteral bool
	PointerLiteral  bool

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
	// fill literals methods
	switch f.Type {
	case "string":
		charset := []byte("abcdefghijklmnopqrstuvwxyz")
		words := 1 + rand.Intn(10) // rand value in [1..10]
		out := []byte("string: ")

		for word := 0; word < words; word++ {
			chars := 1 + rand.Intn(8) // rand value in [1..8]
			for char := 0; char < chars; char++ {
				out = append(out, charset[rand.Intn(len(charset))])
			}
			out = append(out, ' ')
		}

		f.newLiteral = fmt.Sprintf("\"%s\"", out)

	case "int64":
		f.nlit(rand.Int63n(maxJSInt))
	case "uint64":
		f.nlit(rand.Int63n(maxJSInt))
	case "math.Ndau":
		f.nlit(rand.Int63n(maxJSInt))
	case "math.Duration":
		f.nlit(rand.Int63n(math.Year * 5))
	case "pricecurve.Nanocent":
		f.nlit(rand.Int63n(maxJSInt))

	case "byte", "uint8":
		bytes, err := randBytes(1)
		if err != nil {
			return err
		}
		f.newLiteral = byteS(bytes[0])

	case "[]byte":
		bytes, err := randBytes(address.MinDataLength)
		if err != nil {
			return err
		}

		f.newLiteral = bytesS(bytes)

	case "address.Address":
		f.FallibleLiteral = true
		bytes, err := randBytes(address.MinDataLength)
		if err != nil {
			return err
		}
		addr, err := address.Generate(address.KindUser, bytes)
		if err != nil {
			return err
		}
		f.newLiteral = fmt.Sprintf("address.Validate(\"%s\")", addr)

	case "signature.PublicKey", "[]signature.PublicKey":
		f.FallibleLiteral = true
		f.PointerLiteral = true
		bytes, err := randBytes(signature.Ed25519.PublicKeySize())
		if err != nil {
			return err
		}
		f.newLiteral = fmt.Sprintf("signature.RawPublicKey(signature.Ed25519, %s, nil)", bytesS(bytes))

	case "signature.Signature", "[]signature.Signature":
		f.FallibleLiteral = true
		f.PointerLiteral = true
		bytes, err := randBytes(signature.Ed25519.SignatureSize())
		if err != nil {
			return err
		}
		f.newLiteral = fmt.Sprintf("signature.RawSignature(signature.Ed25519, %s)", bytesS(bytes))

	default:
		return fmt.Errorf("unknown type: %s", f.Type)
	}

	// fill length, bytes methods
	switch f.Type {
	case "string", "[]byte":
		f.Length = func(s string) string { return fmt.Sprintf("len(%s)", s) }
		f.Bytes = func(s string) string { return fmt.Sprintf("[]byte(%s)", s) }
	case "int64", "uint64", "math.Ndau", "math.Duration", "pricecurve.Nanocent":
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

func (f Field) example() interface{} {
	if f.Transaction == nil || f.Transaction.Example == nil {
		return nil
	}
	value := reflect.ValueOf(f.Transaction.Example)
	for value.Kind() == reflect.Ptr {
		value = value.Elem()
	}
	if value.Kind() != reflect.Struct {
		panic("expected transactable to be a struct, but it is " + value.Kind().String())
	}

	fieldValue := value.FieldByName(f.Name)
	if !fieldValue.IsValid() {
		panic(fmt.Sprintf("transactable %s had no field %s", value, f.Name))
	}
	return fieldValue.Interface()
}

// Literal returns an appropriate literal for this field
//
// If the transaction has an example, the example's value is used.
// Otherwise, a newly-generated value is used.
func (f Field) Literal() string {
	example := f.example()
	if example == nil {
		return f.newLiteral
	}

	switch field := example.(type) {
	case int64, uint64, byte:
		return fmt.Sprintf("%v", field)

	case string:
		return fmt.Sprintf("\"%s\"", field)

	case []byte:
		return bytesS(field)

	case math.Ndau, math.Duration, pricecurve.Nanocent:
		return fmt.Sprintf("%d", field)

	case address.Address:
		return fmt.Sprintf("address.Validate(\"%s\")", field)

	case signature.PublicKey:
		return fmt.Sprintf("signature.RawPublicKey(signature.Ed25519, %s, nil)", bytesS(field.KeyBytes()))

	case []signature.PublicKey:
		return fmt.Sprintf("signature.RawPublicKey(signature.Ed25519, %s, nil)", bytesS(field[0].KeyBytes()))

	case signature.Signature:
		return fmt.Sprintf("signature.RawSignature(signature.Ed25519, %s)", bytesS(field.Bytes()))

	case []signature.Signature:
		return fmt.Sprintf("signature.RawSignature(signature.Ed25519, %s)", bytesS(field[0].Bytes()))
	}

	panic("unknown type")
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

// Comment returns useful comments about a field.
//
// Mainly intended for []byte
func (f *Field) Comment() string {
	example := f.example()
	if example == nil {
		return ""
	}

	switch example := example.(type) {
	case []byte:
		return base64.StdEncoding.EncodeToString(example)
	}

	return ""
}
