package txgen

// use go generate to create json examples for every transaction

//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/generate_txgen
//go:generate goimports -w $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau/signable_bytes_gen.go
