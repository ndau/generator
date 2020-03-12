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
	"encoding/json"

	"github.com/ndau/metanode/pkg/meta/transaction"
)

// Transaction stores metadata about a transaction
type Transaction struct {
	Name    string
	Fields  []Field
	Example metatx.Transactable
}

// HasField is true if the transaction has a field with the specified name
func (t Transaction) HasField(name string) bool {
	for _, f := range t.Fields {
		if f.Name == name {
			return true
		}
	}
	return false
}

// Multisig is true if this transaction supports multiple signatures
func (t Transaction) Multisig() bool {
	for _, f := range t.Fields {
		if f.IsSignature() && f.IsSlice() {
			return true
		}
	}
	return false
}

// JSON returns the JSON form of this transaction's example
func (t Transaction) JSON() string {
	js, err := json.Marshal(t.Example)
	if err != nil {
		panic(err)
	}
	return string(js)
}
