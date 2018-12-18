package txjson

import (
	"os"
	"path/filepath"
)

var (
	rawGopath   = "$GOPATH"
	gopath      string
	oneiro      string
	project     string
	ndauProject string
	// TransactionPath is the path to the transaction definition file
	TransactionPath string
	txjson          string
	examples        string
	// TemplatePath is the path to the template file
	TemplatePath        string
	jsonLiteralsCmd     string
	jsonLiteralsCmdMain string
)

func init() {
	gopath = os.ExpandEnv(rawGopath)
	oneiro = filepath.Join(gopath, "src", "github.com", "oneiro-ndev")
	project = filepath.Join(oneiro, "generator")
	ndauProject = filepath.Join(oneiro, "ndau")
	txjson = filepath.Join(project, "pkg", "txjson")
	examples = filepath.Join(txjson, "examples")
	TemplatePath = filepath.Join(txjson, "json_literals.go.tmpl")
	jsonLiteralsCmd = filepath.Join(project, "cmd", "json_literals")
	jsonLiteralsCmdMain = filepath.Join(jsonLiteralsCmd, "main.go")

	TransactionPath = filepath.Join(ndauProject, "pkg", "ndau", "transactions.go")
}
