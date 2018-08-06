# Browserizr

![Status - Working in progress](https://img.shields.io/badge/Status-WIP-red.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
if (Browserizr.is('chrome')) {
  // code for chrome
}

// add CSS classes to html (element is optional)
Browserizr.addClasses(['ie', 'ie11'])
```

### CSS

```css
/**************************************************
in js file -> Browserizr.addClasses(['ie', 'ie11'])
**************************************************/

.ie11 .my-element {
  /* css rules for IE browser */
}

.ie.not-ie11 .my-element {
  /* css rules for all IE browsers, but not for 11 version */
}

.not-ie .my-element {
  /* css rules for all browsers, but not for IE */
}
```

---

## List of built-in tests

Browserizr has detects test for:

1. `android`
1. `android3`
1. `android4`
1. `android5`
1. `android6`
1. `android7`
1. `android8`
1. `chrome`
1. `edge`
1. `edge-android`
1. `edge-ios`
1. `ie`
1. `ie8`
1. `ie9`
1. `ie10`
1. `ie11`
1. `ios`
1. `ipad`
1. `ipod`
1. `iphone`
1. `iphone4`
1. `iphone5`
1. `iphone678` - _iPhone 6/7/8_
1. `iphone678plus` - _iPhone 6/7/8 plus_
1. `iphonex`
1. `linux`
1. `mac`
1. `maclike`
1. `meizu-phone`
1. `meizunote-phone`
1. `moz`
1. `opera`
1. `redmi-phone`
1. `redminote-phone`
1. `safari`
1. `windows`
1. `windows-xp`
1. `windows-vista`
1. `windows7`
1. `windows8`
1. `windows10`
1. `windows-phone`

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

### check()

Returns: `{string[]}` - array of all positive detects.

_Example:_
 
```js
var detects = Browserizr.check()
console.log(detects.join(' | '))
```

### is(test)

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `test` | `string` | test name

Returns: `{boolean|null}` - `null` if test not specified

_Example:_
 
```js
if (Browserizr.is('edge')) {
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
Browserizr.addClasses(['iphone', 'android'])
// <html class="iphone not-android"> -> if iPhone
// <html class="not-iphone android"> -> if Android

// or 
Browserizr.addClasses(['iphone', 'android'], 'is-')
// <html class="is-iphone is-not-android"> -> if iPhone
// <html class="is-not-iphone is-android"> -> if Android

// or 
Browserizr.addClasses(['iphone', 'iphonex'], '', document.body)
// <body class="iphone iphonex"> -> if iPhone and iPhone X
// <body class="iphone not-iphonex"> -> if iPhone and not iPhone X
// <body class="not-iphone not-iphonex"> -> if not iPhone

// or 
Browserizr.addClasses(['windows', 'mac'], 'my-element--', document.querySelectorAll('.my-element'))
// <div class="my-element my-element--windows my-element--not-mac"> if Windows
// <div class="my-element my-element--not-windows my-element--mac"> if Macintosh
// <div class="my-element my-element--not-windows my-element--not-mac"> if Linux ))
```

### addTest(testName, testFn)

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `testName` | `string` | test name
 `testFn` | `function` | your custom detecting function
 
_Example:_

```js
Browserizr.addTest('nexus6', function(ua) {
  return /Nexus\s6/i.test(ua)
})

Browserizr.addTest('windows32', function(ua, platform) {
  return /^Win32/i.test(platform)
})

if (Browserizr.is('nexus6')) {
  // your code for nexus
}

Browserizr.addClasses(['nexus6', 'windows32'])
```
