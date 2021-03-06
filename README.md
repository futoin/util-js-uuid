
  [![NPM Version](https://img.shields.io/npm/v/futoin-uuid.svg?style=flat)](https://www.npmjs.com/package/futoin-uuid)
  [![NPM Downloads](https://img.shields.io/npm/dm/futoin-uuid.svg?style=flat)](https://www.npmjs.com/package/futoin-uuid)
  [![Build Status](https://travis-ci.org/futoin/util-js-uuid.svg)](https://travis-ci.org/futoin/util-js-uuid)
  [![stable](https://img.shields.io/badge/stability-stable-green.svg?style=flat)](https://www.npmjs.com/package/futoin-uuid)

  [![NPM](https://nodei.co/npm/futoin-uuid.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/futoin-uuid/)

# About

A primitive wrapper of [uuid](https://www.npmjs.com/package/uuid) package for
UUID v4 generation with Base64 encoding.

The reason is to get a universal and short UUID representation in printable characters
which can be efficiently used in JSON and databases without special UUID type.

It produces only 22 characters instead of canonical 36 hexdecimal chars with separators.

**Documentation** --> [FutoIn Guide](https://futoin.org/docs/miscjs/uuid/)

Author: [Andrey Galkin](mailto:andrey@futoin.org)

# Installation for Node.js

Command line:
```sh
$ npm install futoin-uuid --save
```
or:

```sh
$ yarn add futoin-uuid --save
```

# Examples

```javascript
const UUIDTool = require('futoin-uuid');

UUIDTool.genBin(); // -> Buffer(16)
UUIDTool.genB64(); // -> String(22)
```
    
# API documentation

<a name="UUIDTool"></a>

## UUIDTool
Common tool for UUID generation and use in transactions

**Kind**: global class  

* [UUIDTool](#UUIDTool)
    * [.genBin()](#UUIDTool.genBin) ⇒ <code>Buffer</code>
    * [.genB64()](#UUIDTool.genB64) ⇒ <code>string</code>

<a name="UUIDTool.genBin"></a>

### UUIDTool.genBin() ⇒ <code>Buffer</code>
Generate UUID v4

**Kind**: static method of [<code>UUIDTool</code>](#UUIDTool)  
**Returns**: <code>Buffer</code> - buffer of 16 items  
<a name="UUIDTool.genB64"></a>

### UUIDTool.genB64() ⇒ <code>string</code>
Generate UUID v4 encoded in Base64 without padding

**Kind**: static method of [<code>UUIDTool</code>](#UUIDTool)  
**Returns**: <code>string</code> - 22 characters  

