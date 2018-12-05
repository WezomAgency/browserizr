# Browserizr

[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/browserizr)
[![composer](https://img.shields.io/badge/composer-require-orange.svg)](https://packagist.org/packages/wezom-agency/browserizr)
[![WezomAgency](https://img.shields.io/badge/wezom-agency-red.svg)](https://github.com/WezomAgency)
[![Build Status](https://travis-ci.org/WezomAgency/browserizr.svg?branch=master)](https://travis-ci.org/WezomAgency/browserizr)

> **Browserizr** is tiny library, that detects your browser and platform,  
> with testing `window.navigator.userAgent` and `window.navigator.platform`.

---

## Demo

https://wezomagency.github.io/browserizr/

---

***Table of contents***

- [Install](#install)
	- [NPM](#npm)
	- [CDN](#cdn-unpkgcom)
	- [Download](#download)
	- [include as module](#include-as-module)
	- [include as external file](#include-as-external-file)
- [Previous versions](#previous-versions)
- [API](#api)
	- [List of built-in tests](#list-of-built-in-tests)
	- [Generate css classes](#generate-css-classes)

---

## Install

### NPM

```bash
$ npm i browserizr
```

### CDN (unpkg.com)

```html
<script src="https://unpkg.com/browserizr@latest/dist/browserizr.js"></script>
<!-- or minimized version -->
<script src="https://unpkg.com/browserizr@latest/dist/browserizr.min.js"></script>
```

### Download

- [browserizr.js (es6)](https://unpkg.com/browserizr@latest/index.js)
- [browserizr.js](https://unpkg.com/browserizr@latest/dist/browserizr.js)
- [browserizr.min.js](https://unpkg.com/browserizr@latest/dist/browserizr.min.js)

### include as module

```js
import Browserizr from 'browserizr'
```

### include as external file

```html
<script src="your/path/to/browserizr.js"></script>
<!-- will be added to Window, as global object Browserizr -->
```

---

## Previous versions

> _please read:_

- [old-versions/README-2.x.md](https://github.com/WezomAgency/browserizr/blob/master/old-versions/README-2.x.md)


---

## API

## List of built-in tests

Browserizr has detects test for:

1. `Browserizr.detect().isAndroid()`
1. `Browserizr.detect().isAndroid3()`
1. `Browserizr.detect().isAndroid4()`
1. `Browserizr.detect().isAndroid5()`
1. `Browserizr.detect().isAndroid6()`
1. `Browserizr.detect().isAndroid7()`
1. `Browserizr.detect().isAndroid8()`
1. `Browserizr.detect().isBlackberry()`
1. `Browserizr.detect().isBlackberry10()`
1. `Browserizr.detect().isChrome()`
1. `Browserizr.detect().isDesktop()`
1. `Browserizr.detect().isEdge()`
1. `Browserizr.detect().isEdgeAndroid()`
1. `Browserizr.detect().isEdgeIOS()`
1. `Browserizr.detect().isIE()`
1. `Browserizr.detect().isIE8()`
1. `Browserizr.detect().isIE9()`
1. `Browserizr.detect().isIE10()`
1. `Browserizr.detect().isIE11()`
1. `Browserizr.detect().isIOS()`
1. `Browserizr.detect().isIPad()`
1. `Browserizr.detect().isIPod()`
1. `Browserizr.detect().isIPhone()`
1. `Browserizr.detect().isIPhone4()`
1. `Browserizr.detect().isIPhone5()`
1. `Browserizr.detect().isIPhone678()` - _iPhone 6/7/8_
1. `Browserizr.detect().isIPhone678plus()` - _iPhone 6/7/8 plus_
1. `Browserizr.detect().isIPhonex()`
1. `Browserizr.detect().isLinux()`
1. `Browserizr.detect().isMac()`
1. `Browserizr.detect().isMacLike()`
1. `Browserizr.detect().isMeizuPhone()`
1. `Browserizr.detect().isMeizunotePhone()`
1. `Browserizr.detect().isMobile()`
1. `Browserizr.detect().isMoz()`
1. `Browserizr.detect().isOpera()`
1. `Browserizr.detect().isRedmiPhone()`
1. `Browserizr.detect().isRedminotePhone()`
1. `Browserizr.detect().isSafari()`
1. `Browserizr.detect().isWindows()`
1. `Browserizr.detect().isWindows_xp()`
1. `Browserizr.detect().isWindows_vista()`
1. `Browserizr.detect().isWindows7()`
1. `Browserizr.detect().isWindows8()`
1. `Browserizr.detect().isWindows10()`
1. `Browserizr.detect().isWindowsPhone()`

```js
// you can use shorthand way

const browser = Browserizr.detect();

if (browser.isChrome()) {
  // ....
}
```



### Generate css classes

#### `Browserizr.detect().cssClasses(tests, cssPrefix = "", toString = true): string[]`

> Create array with CSS classes

_Parameters:_

Name | Data type | Default value | Description
 --- | --- | --- | ---
 `tests` | `string[]` |  | array of wanted tests, each name - test name without `is` prefix
 `cssPrefix` | `string` | `""` | custom prefix for CSS class name
 
_Usage examples:_

```js
const classes = Browserizr.detect().cssClasses(['Mobile', 'Desktop']);

// => ['is-mobile', 'is-not-desktop'] => if mobile device
// => ['is-not-mobile', 'is-desktop'] => if desktop
```

```js
const classes = Browserizr.detect().cssClasses(['Mobile', 'Desktop'], 'browserizr-');

// => ['browserizr-is-mobile', 'browserizr-is-not-desktop'] => if mobile device
// => ['browserizr-is-not-mobile', 'browserizr-is-desktop'] => if desktop
```

### Change prefixes

#### `Browserizr.prefixIs`

_default value_: `'is-'`

```js
Browserizr.detect().cssClasses(['Android']) // => 'is-android' <- default prefix

Browserizr.prefixIs = ''; // set empty
Browserizr.detect().cssClasses(['Android']) // => 'android'

Browserizr.prefixIs = 'that-is-my-'; // ;)
Browserizr.detect().cssClasses(['Android']) // => 'that-is-my-android'
``` 

#### `Browserizr.prefixIsNot`

_default value_: `'is-not-'`

```js
Browserizr.detect().cssClasses(['Android']) // => 'is-not-android' <- default prefix

Browserizr.prefixIs = 'no-'; // set empty
Browserizr.detect().cssClasses(['Android']) // => 'no-android'

Browserizr.prefixIs = 'that-is-not-my-'; // ;)
Browserizr.detect().cssClasses(['Android']) // => 'that-is-not-my-android'
``` 

---
