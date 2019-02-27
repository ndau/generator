package nomsify

//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/nomsify $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau
//go:generate find $GOPATH/src/github.com/oneiro-ndev/ndau/pkg/ndau -name '*noms_gen*.go' -exec goimports -w {} ;
