#!/usr/bin/env python3

import os
import sys
import subprocess
from functools import lru_cache
import re
import shlex
from shutil import move
from pathlib import Path
from tempfile import mkstemp


def _load_sbgt():
    sbgt = (
        Path(os.environ["GOPATH"])
        / "src"
        / "github.com"
        / "oneiro-ndev"
        / "ndau"
        / "pkg"
        / "ndau"
        / "signable_bytes_gen_test.go"
    )
    if not sbgt.exists():
        print(f"{SBGT} does not exist", file=sys.stderr)
        sys.exit(1)
    return sbgt


SBGT = _load_sbgt()
TEST_NAME_RE = re.compile(r"func Test([^_]+)_")
ENDTEST_RE = re.compile(r"^}\s*$")
SPACING_RE = re.compile(r"^(\s*)")
TEST_FILENAME = Path("sbgt.test")


def tx_names():
    with SBGT.open() as f:
        for line in f:
            match = TEST_NAME_RE.match(line)
            if match:
                yield match.group(1)


def compile_test():
    presult = subprocess.run(
        shlex.split(
            "go test "
            "github.com/oneiro-ndev/ndau/pkg/ndau "
            f"-c -o {TEST_FILENAME.resolve()} "
        )
    )
    presult.check_returncode()


class TestPassed(Exception):
    pass


@lru_cache(1)
def bytes(tx_name):
    presult = subprocess.run(
        shlex.split(
            f"{TEST_FILENAME.resolve()} -test.timeout 30s "
            f"-test.run '^Test{tx_name}_SignableBytes$'"
        ),
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    if presult.returncode == 0:
        raise TestPassed()

    for line in presult.stdout.split("\n"):
        if "actual" in line:
            return line.rpartition(":")[2].strip()

    print(f"return code: {presult.returncode}", file=sys.stderr)
    print(presult.stdout, file=sys.stderr)
    print(presult.stderr, file=sys.stderr)
    raise Exception("actual bytes not found")


def fix_tests():
    global SBGT

    current = None
    skip = False

    fh, tfile_path = mkstemp()
    with os.fdopen(fh, "w") as new_file, SBGT.open() as old_file:
        for line in old_file:
            if skip:
                skip = False
                continue

            m = TEST_NAME_RE.match(line)
            if m:
                current = m.group(1)
                print(f"injecting test data for {current}...", end="")
                sys.stdout.flush()
            if current and ENDTEST_RE.match(line):
                current = None
                print(" done")

            if current and "//// TODO ////" in line:
                skip = True
                spacing = SPACING_RE.match(line).group(1)
                try:
                    print(f"{spacing}{bytes(current)},", file=new_file)
                except TestPassed:
                    print(line, file=new_file, end="")
            else:
                print(line, file=new_file, end="")

    SBGT.unlink()
    move(tfile_path, SBGT)
    SBGT = _load_sbgt()


if __name__ == "__main__":
    if not TEST_FILENAME.exists():
        compile_test()
    fix_tests()
    TEST_FILENAME.unlink()
