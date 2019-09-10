# bip39-cli

[![npm version](https://badge.fury.io/js/bip39-cli.svg)](https://badge.fury.io/js/bip39-cli)

bip39-cli is a simple cli tool to create, and verify
[bip39 mnemonics](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

```
$ npm install -g bip39-cli
```

## Examples

```sh

$ bip39-cli generate
dentist whale pattern drastic time black cigar bike person destroy punch hungry

$ bip39-cli validate "dentist whale pattern drastic time black cigar bike person destroy punch hungry"
Mnemonic is valid!

$ bip39-cli accounts --count 9 "dentist whale pattern drastic time black cigar bike person destroy punch hungry"
0x4867d8f4144114c192240a4ec5f4f43918c5a55c 3fcbc9810851c5e9cce6f241664078b2e1fce92a3ad33cc2178220247678dce6
0x8447bef0ed8e6692cc49fc3a0dcd64b8cf61538a 711af41c58edf0e869a6e8561de379172a34ce26e2df0da58e89b3a0dacad6e8
0x03f70a4793dd3bf3c446a39ca51a592c9754aa72 2e5706976573cd54bf8a61254c7e230b802b81acba0c55a91457b5e998bb4841
0xcb360864d4b4828b5435a9e8565976f23b9599a1 c155bc4f470ea4d628da2c94f64eb8d75d45a0872a6ab513ae5a98652e515b7e
0x6633c594202467328224180f8068b0958f697428 0a83fcf18906015673b5448529913f276184ed0aa8e80bf08ee39e5e83864171
0xd01ca33f99b89f4bcc9d6c60d61e39f571422406 d1aa96572adc6b9a8af59fa589388ddea88089a15db725ec6adad189152d8b5f
0xec41adb03424a30eba42238f4f651a71a37ecbb9 5d03e83fe50b8360ceecb4db76d90983590e3d297b2a4c47dbc9a3d1d2c387ec
0xbabebdaab3a6d3ef3ec29cfd1adf6b66ae4f4168 d8c3d3968556de70810fc981070fc8df7b785cd2db31ef07e382186edbdc5018
0xf0460aaf7c907702d24c85139ec4312972853167 2e4a46f1671140778c87ad7e3c7d7f5d6532e27b7f6254fcbaea89f79eb0b870
```

## Options

```
  Usage: bip39-cli [options] [command]

  Options:

    -V, --version                      output the version number
    -h, --help                         output usage information

  Commands:

    generate|gen [options]             generate a new bip39 mnemonic
    validate|val [options] <mnemonic>  validate the given bip39 mnemonic
    accounts|acc [options] <mnemonic>  print accounts with public address and private key
```

```
  Usage: generate|gen [options]

  generate a new bip39 mnemonic

  Options:

    -w, --wordlist <wordlist>  EN JA chinese_simplified chinese_traditional english french italian japanese korean spanish (default: english)
    --strength <strength>      strength defaults to 128 (min), max is 256, must be a multiple of 32 (default: 128)
    -h, --help                 output usage information
```

```
  Usage: validate|val [options] <mnemonic>

  validate the given bip39 mnemonic

  Options:

    -w, --wordlist <wordlist>  EN JA chinese_simplified chinese_traditional english french italian japanese korean spanish (default: english)
    -h, --help                 output usage information
```

```
  Usage: accounts|acc [options] <mnemonic>

  print accounts with public address and private key

  Options:

    -c, --count <count>  number of accounts (default: 5)
    -h, --help           output usage information
```

## Alternatives

 - https://iancoleman.io/bip39/

## License (ISC)

Copyright (c) 2018 , Asure Foundation <mailto:info@asure.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
