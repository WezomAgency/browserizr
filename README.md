# Browserizr

[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/browserizr)
[![WezomAgency](https://img.shields.io/badge/wezom-agency-red.svg)](https://github.com/WezomAgency)
[![Build Status](https://travis-ci.org/WezomAgency/browserizr.svg?branch=master)](https://travis-ci.org/WezomAgency/browserizr)

> **Browserizr** is tiny library, that detects your browser and platform,  
> with testing `window.navigator.userAgent` and `window.navigator.platform`.

---

## Demo

https://wezomagency.github.io/browserizr/

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

## Usage

### JS

```js
// with conditions
if (Browserizr.is_chrome) {
  // code for chrome
}

// add CSS classes to html (element is optional)
Browserizr.addClasses(['is_ie', 'is_ie11'])
```

### CSS

```css
/**************************************************
in js file -> Browserizr.addClasses(['is_ie', 'is_ie11'])
**************************************************/

.is-ie11 .my-element {
  /* css rules for IE browser */
}

.is-ie.is-not-ie11 .my-element {
  /* css rules for all IE browsers, but not for 11 version */
}

.is-not-ie .my-element {
  /* css rules for all browsers, but not for IE */
}
```

---

## List of built-in tests

Browserizr has detects test for:

1. `is_android`
1. `is_android3`
1. `is_android4`
1. `is_android5`
1. `is_android6`
1. `is_android7`
1. `is_android8`
1. `is_blackberry`
1. `is_blackberry10`
1. `is_chrome`
1. `is_desktop`
1. `is_edge`
1. `is_edge_android`
1. `is_edge_ios`
1. `is_ie`
1. `is_ie8`
1. `is_ie9`
1. `is_ie10`
1. `is_ie11`
1. `is_ios`
1. `is_ipad`
1. `is_ipod`
1. `is_iphone`
1. `is_iphone4`
1. `is_iphone5`
1. `is_iphone678` - _iPhone 6/7/8_
1. `is_iphone678plus` - _iPhone 6/7/8 plus_
1. `is_iphonex`
1. `is_linux`
1. `is_mac`
1. `is_maclike`
1. `is_meizu_phone`
1. `is_meizunote_phone`
1. `is_mobile`
1. `is_moz`
1. `is_opera`
1. `is_redmi_phone`
1. `is_redminote_phone`
1. `is_safari`
1. `is_windows`
1. `is_windows_xp`
1. `is_windows_vista`
1. `is_windows7`
1. `is_windows8`
1. `is_windows10`
1. `is_windows_phone`

---

## API

### userAgent

type: `string`  
default: `window.navigator.userAgent`

### platform

type: `string`  
default: `window.navigator.platform`

### width

type: `number`  
default: `window.screen.width`

### height

type: `number`  
default: `window.screen.height`

### detect()

Run this method for re-detect initial tests

### detected()

Returns: `{string[]}` - array of all positive tests.

_Example:_
 
```js
var detects = Browserizr.detected()
console.log(detects.join(' | '))
```

### is_[detect_name]

Check needed detect

_Example:_
 
```js
if (Browserizr.is_edge) {
  // your code for edge
}
```

### addClasses(tests [, classPrefix] [, element])

_Parameters:_

Name | Data type | Default value | Description
 --- | --- | --- | ---
 `tests` | `string[]` |  | array of wanted tests
 `classPrefix` | `string` | `""` | custom prefix for CSS class name
 `element` | `HTMLElement` | `document.documentElement` | HTML element to which CSS classes will be added
 
_Example:_

```js
Browserizr.addClasses(['is_iphone', 'is_android'])
// <html class="is-iphone is-not-android"> -> if iPhone
// <html class="is-not-iphone is-android"> -> if Android

// or 
Browserizr.addClasses(['is_iphone', 'is_iphonex'], '', document.body)
// <body class="is-iphone is-iphonex"> -> if iPhone and iPhone X
// <body class="is-iphone is-not-iphonex"> -> if iPhone and not iPhone X
// <body class="is-not-iphone is-not-iphonex"> -> if not iPhone

// or 
Browserizr.addClasses(['is_windows', 'is_mac'], 'my-element--', document.querySelectorAll('.my-element'))
// <div class="my-element my-element--is-windows my-element--is-not-mac"> if Windows
// <div class="my-element my-element--is-not-windows my-element--is-mac"> if Macintosh
// <div class="my-element my-element--is-not-windows my-element--is-not-mac"> if Linux ))

// also you can provide jQuery elements 
Browserizr.addClasses(['is_windows', 'is_mac'], 'my-element--', $('.my-element'))
```

### addTest(testName, testFn)

Coming soon
