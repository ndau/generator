package txgen_test

import (
	"os"
	"path/filepath"
)

var (
	rawGopath           = "$GOPATH"
	gopath              string
	oneiro              string
	project             string
	ndauProject         string
	txjson              string
	examples            string
	jsonLiteralsCmd     string
	jsonLiteralsCmdMain string

	// TransactionPath is the path to the transaction definition file
	TransactionPath string
	// DefaultOutputPath is the path to the default output file
	DefaultOutputPath string
	// DefaultTemplatePath is the path to the default template
	DefaultTemplatePath string
)

func init() {
	gopath = os.ExpandEnv(rawGopath)
	oneiro = filepath.Join(gopath, "src", "github.com", "oneiro-ndev")
	project = filepath.Join(oneiro, "generator")
	ndauProject = filepath.Join(oneiro, "ndau")
	txjson = filepath.Join(project, "pkg", "txjson")
	examples = filepath.Join(txjson, "examples")
	jsonLiteralsCmd = filepath.Join(project, "cmd", "json_literals")
	jsonLiteralsCmdMain = filepath.Join(jsonLiteralsCmd, "main.go")

	TransactionPath = filepath.Join(ndauProject, "pkg", "ndau", "transactions.go")
	DefaultTemplatePath = filepath.Join(project, "pkg", "txgen_test", "signable_bytes_gen_test.go.tmpl")
	DefaultOutputPath = filepath.Join(ndauProject, "pkg", "ndau", "signable_bytes_gen_test.go")
}
