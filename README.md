# Browserizr

![Status - Working in progress](https://img.shields.io/badge/Status-WIP-red.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/node-w3c-validator/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> **Browserizr** is tiny library, that detect your browser and platform,  
> with testing `window.navigator.userAgent` and `window.navigator.platform`.

---

## API

### .is(test)

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `test` | `string` | test name

Returns `{boolean|null}` - `null` if test not specified

```js
if (Browserizr.is('edge')) {
  // your code for edge
}
```

### .addClasses(tests [, classPrefix] [, element])

_Parameters:_

Name | Data type | Default value | Description
 --- | --- | --- | ---
 `tests` | `string[]` |  | list of wanted tests
 `classPrefix` | `string` | `""` | custom prefix for CSS class name
 `element` | `HTMLElement` | `document.documentElement` | HTML element to which CSS classes will be added



```js
Browserizr.addClasses(['iphone', 'android']);
// <html class="iphone not-android"> -> if iPhone
// <html class="not-iphone android"> -> if Android

// or 
Browserizr.addClasses(['iphone', 'android'], 'is-');
// <html class="is-iphone is-not-android"> -> if iPhone
// <html class="is-not-iphone is-android"> -> if Android

// or 
Browserizr.addClasses(['iphone', 'iphone678'], '', document.body);
// <body class="iphone iphonex"> -> if iPhone and iPhone X
// <body class="iphone not-iphonex"> -> if iPhone and not iPhone X
// <body class="not-iphone not-iphonex"> -> if not iPhone

// or 
Browserizr.addClasses(['windows', 'mac'], 'my-element--', document.querySelectorAll('.my-element'));
// <div class="my-element my-element--windows my-element--not-mac"> if Macintosh
// <div class="my-element my-element--not-windows my-element--mac"> if Windows
// <div class="my-element my-element--not-windows my-element--not-mac"> if Linux ))
```
