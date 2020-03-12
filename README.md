# ndau codegen

The intent here is to generate a bunch of code for the ndau (and eventually, chaos) codebases. Initially, this work was inside the ndau repo, but there was a problem: it was difficult to develop, because at all times that the generated code wasn't perfect, it would put the entire repo into a state which wouldn't compile.

To solve this problem, we just moved the packages out to this repo.

## `cmd`

This package includes a `cmd` package containing some executable code. For the short term, this is acceptable beacuse this package is intended to run only on developer machines for which all necessary packages for building ndau are already present in their proper versions. Later on, it may be worthwhile to move the commands into the [`commands` repo](https://github.com/ndau/commands).
