package example_test

import (
	"testing"

	"github.com/attic-labs/noms/go/chunks"
	nt "github.com/attic-labs/noms/go/types"
	"github.com/oneiro-ndev/generator/pkg/nomsify/example"
)

func newTestValueStore() *nt.ValueStore {
	ts := &chunks.TestStorage{}
	return nt.NewValueStore(ts.NewView())
}

var vval nt.Value

func BenchmarkMarshalNomsAccountData(b *testing.B) {
	v := example.AccountData{}

	vrw := newTestValueStore()

	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		vval, _ = v.MarshalNoms(vrw)
	}
}

var ad example.AccountData

func BenchmarkUnmarshalNomsAccountData(b *testing.B) {
	v := example.AccountData{}

	vrw := newTestValueStore()
	vval, _ = v.MarshalNoms(vrw)

	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		ad.UnmarshalNoms(vval)
	}
}
