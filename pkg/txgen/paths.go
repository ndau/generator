package txgen

import (
	"os"
	"path/filepath"
)

var (
	rawGopath   = "$GOPATH"
	gopath      string
	oneiro      string
	project     string
	templates   string
	ndauProject string
	ndauPkg     string

	// ExamplesPath is the path to the generated examples
	ExamplesPath string

	// TransactionPath is the path to the transaction definition file
	TransactionPath string

	// ConstructorsTemplatePath is the path to the Constructors template
	ConstructorsTemplatePath string
	// ConstructorsOutputPath is the path to the Constructors output file
	ConstructorsOutputPath string
	// JSONLiteralsTemplatePath is the path to the JSON literals template
	JSONLiteralsTemplatePath string
	// JSONLiteralsOutputPath is the path to the JSON literals output file
	JSONLiteralsOutputPath string
	// JSTestTemplatePath is the path to the JS test template
	JSTestTemplatePath string
	// JSTestOutputPath is the path to the JS test output file
	JSTestOutputPath string
	// MaketestsTemplatePath is the path to the template which makes the binary which makes the tests
	MaketestsTemplatePath string
	// MaketestsOutputPath is the path to the Maketests output file
	MaketestsOutputPath string
	// SignableBytesTemplatePath is the path to the SignableBytes template
	SignableBytesTemplatePath string
	// SignableBytesOutputPath is the path to the SignableBytes output file
	SignableBytesOutputPath string
	// SignableBytesTestTemplatePath is the path to the SignableBytes tests template
	SignableBytesTestTemplatePath string
	// SignableBytesTestOutputPath is the path to the SignableBytes tests output file
	SignableBytesTestOutputPath string
)

func init() {
	gopath = os.ExpandEnv(rawGopath)
	oneiro = filepath.Join(gopath, "src", "github.com", "oneiro-ndev")

	project = filepath.Join(oneiro, "generator")
	templates = filepath.Join(project, "templates")
	ExamplesPath = filepath.Join(project, "examples")

	ndauProject = filepath.Join(oneiro, "ndau")
	ndauPkg = filepath.Join(ndauProject, "pkg", "ndau")
	TransactionPath = filepath.Join(ndauPkg, "transactions.go")

	ConstructorsTemplatePath = filepath.Join(templates, "constructors.go.tmpl")
	JSONLiteralsTemplatePath = filepath.Join(templates, "json_literals.go.tmpl")
	JSTestTemplatePath = filepath.Join(templates, "TxSignPrep-test-gen.js.tmpl")
	MaketestsTemplatePath = filepath.Join(templates, "maketests.go.tmpl")
	SignableBytesTemplatePath = filepath.Join(templates, "signable_bytes.go.tmpl")
	SignableBytesTestTemplatePath = filepath.Join(templates, "signable_bytes_gen_test.go.tmpl")

	ConstructorsOutputPath = filepath.Join(ndauPkg, "constructors_gen.go")
	JSONLiteralsOutputPath = filepath.Join(project, "cmd", "json_literals", "main.go")
	JSTestOutputPath = filepath.Join(project, "TxSignPrep-test-gen.js")
	MaketestsOutputPath = filepath.Join(project, "cmd", "maketests", "main.go")
	SignableBytesOutputPath = filepath.Join(ndauPkg, "signable_bytes_gen.go")
	SignableBytesTestOutputPath = filepath.Join(ndauPkg, "signable_bytes_gen_test.go")
}
