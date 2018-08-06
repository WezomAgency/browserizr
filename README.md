# Browserizr

![Status - Working in progress](https://img.shields.io/badge/Status-WIP-red.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> **Browserizr** is tiny library, that detect your browser and platform,  
> with testing `window.navigator.userAgent` and `window.navigator.platform`.

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

- [browserizr.js (es6)](https://unpkg.com/browserizr@latest/browserizr.js)
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

- `android`
- `android3`
- `android4`
- `android5`
- `android6`
- `android7`
- `android8`
- `blink`
- `chrome`
- `edge`
- `edge-android`
- `edge-ios`
- `ie`
- `ie8`
- `ie9`
- `ie10`
- `ie11`
- `ios`
- `ipad`
- `ipod`
- `iphone`
- `iphone4`
- `iphone5`
- `iphone678` - iPhone 6/7/8
- `iphone678plus` - iPhone 6/7/8 plus
- `iphonex`
- `linux` - based on platform test
- `mac` - based on platform test
- `maclike`
- `meizu-phone`
- `meizunote-phone`
- `moz`
- `opera`
- `redmi-phone`
- `redminote-phone`
- `safari`
- `webkit`
- `windows` - based on platform test
- `windows-xp`
- `windows-vista`
- `windows7`
- `windows8`
- `windows10`
- `windows-phone`

---

## API

### userAgent

type: `string`  
default: _current_ `window.navigator.userAgent`

### platform

type: `string`  
default: _current_ `window.navigator.platform`

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
Browserizr.addClasses(['iphone', 'iphone678'], '', document.body)
// <body class="iphone iphonex"> -> if iPhone and iPhone X
// <body class="iphone not-iphonex"> -> if iPhone and not iPhone X
// <body class="not-iphone not-iphonex"> -> if not iPhone

// or 
Browserizr.addClasses(['windows', 'mac'], 'my-element--', document.querySelectorAll('.my-element'))
// <div class="my-element my-element--windows my-element--not-mac"> if Macintosh
// <div class="my-element my-element--not-windows my-element--mac"> if Windows
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
