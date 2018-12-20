package txgen

import (
	"crypto/rand"
	"fmt"
	"strings"
)

func randBytes(qty int) ([]byte, error) {
	buffer := make([]byte, qty)
	_, err := rand.Read(buffer)
	return buffer, err
}

func byteS(b byte) string {
	return fmt.Sprintf("0x%02x", b)
}

func bytesS(bs []byte) string {
	bS := make([]string, len(bs))
	for idx := range bs {
		bS[idx] = byteS(bs[idx])
	}
	return fmt.Sprintf("[]byte{%s}", strings.Join(bS, ", "))
}

func (f *Field) nlit(v int64) {
	f.newLiteral = fmt.Sprintf("%s(%d)", f.Type, v)
}
