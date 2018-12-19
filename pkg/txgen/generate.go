package txgen

// signable bytes
//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/generate_txgen
//go:generate goimports -w $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau/signable_bytes_gen.go

// constructors
//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/generate_txgen --template $GOPATH/src/github.com/oneiro-ndev/generator/pkg/txgen/constructors.go.tmpl --output $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau/constructors_gen.go
//go:generate goimports -w $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau/constructors_gen.go
