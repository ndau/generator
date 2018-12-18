package txjson

// use go generate to create json examples for every transaction

//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/generate_json_literals
//go:generate go run $GOPATH/src/github.com/oneiro-ndev/generator/cmd/json_literals
//go:generate rm -rf $GOPATH/src/github.com/oneiro-ndev/generator/cmd/json_literals
//go:generate tar -cjvf $GOPATH/src/github.com/oneiro-ndev/generator/examples.tar.bz2 -C $GOPATH/src/github.com/oneiro-ndev/generator/pkg/txjson/examples/ .
