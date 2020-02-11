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
	"fmt"
	"reflect"

	"github.com/oneiro-ndev/metanode/pkg/meta/transaction"
	"github.com/pkg/errors"
)

// https://stackoverflow.com/a/35791105/504550
func getType(myvar interface{}) string {
	t := reflect.TypeOf(myvar)
	for t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	return t.Name()
}

// Context defines all the info the template needs
type Context struct {
	Transactions []Transaction
}

// MakeContext makes a context object from ndau transactions
func MakeContext() (*Context, error) {
	return MakeContextWithExamples(nil)
}

// MakeContextWithExamples makes a context object from ndau transactions
//
// In addition to constructing the AST-based context, when provided with a list
// of instantiated transactions, it will match them and inject them appropriately
// into the context. This allows, for example, writing tests which include auto-
// generated SignableBytes calls
func MakeContextWithExamples(examples []metatx.Transactable) (*Context, error) {
	examplesMap := make(map[string]metatx.Transactable)
	for _, example := range examples {
		examplesMap[getType(example)] = example
	}

	ast, err := ParseTransactions()
	if err != nil {
		return nil, errors.Wrap(err, "parsing transactions")
	}

	txIDs := FindDefinition(ast, TxIDs)
	if txIDs == nil {
		return nil, errors.New("TxIDs not found")
	}

	txNames, err := GetTxNames(txIDs.Definition)
	if err != nil {
		return nil, errors.Wrap(err, "getting tx names")
	}

	transactions := make([]Transaction, 0, len(txNames))

	for _, n := range txNames {
		def := FindDefinition(ast, n)
		if def == nil {
			return nil, fmt.Errorf("tx %s not found", n)
		}

		transaction, err := ParseTransaction(n, def.Definition, examplesMap)
		if err != nil {
			return nil, errors.Wrap(err, fmt.Sprintf("parsing %s tx", n))
		}

		transactions = append(transactions, transaction)
	}

	return &Context{
		Transactions: transactions,
	}, nil
}
