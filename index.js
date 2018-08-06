'use strict'

/**
 * @module
 * @version 0.0.3
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @type {Object}
 * @private
 */
const _tests = {
  android (ua) {
    return /android/i.test(ua)
  },

  android3 (ua) {
    return /android 3\./i.test(ua)
  },

  android4 (ua) {
    return /android 4\./i.test(ua)
  },

  android5 (ua) {
    return /android 5\./i.test(ua)
  },

  android6 (ua) {
    return /android 6\./i.test(ua)
  },

  android7 (ua) {
    return /android 7\./i.test(ua)
  },

  android8 (ua) {
    return /android 8\./i.test(ua)
  },

  blink (ua) {
    return ((window.chrome || (window.Intl && window.Intl.v8BreakIterator)) && 'CSS' in window) && !this.edge(ua)
  },

  chrome (ua) {
    return (!!window.chrome && !this.opera(ua) && !this.edge(ua))
  },

  edge (ua) {
    return / edge\//i.test(ua)
  },

  'edge-android' (ua) {
    return /\sEdgA\//i.test(ua)
  },

  'edge-ios' (ua) {
    return /\sEdgiOS\//i.test(ua)
  },

  ie () {
    return !!document.documentMode
  },

  ie8 () {
    return !!(document.all && !document.addEventListener)
  },

  ie9 () {
    return !!(document.all && !window.atob && !!document.addEventListener)
  },

  ie10 () {
    return !!(document.all && !!window.atob && !!document.addEventListener)
  },

  ie11 (ua) {
    return /Trident.*rv[ :]*11\./.test(ua)
  },

  ios (ua) {
    return this.ipad(ua) || this.ipod(ua) || this.iphone(ua)
  },

  ipad (ua) {
    return /iPad/i.test(ua)
  },

  ipod (ua) {
    return /iPod/i.test(ua)
  },

  iphone (ua) {
    return /iPhone/i.test(ua)
  },

  iphone4 (ua) {
    return this.iphone(ua) && this.wh.width === 320 && this.wh.height === 480
  },

  iphone5 (ua) {
    return this.iphone(ua) && this.wh.width === 320 && this.wh.height === 568
  },

  iphone678 (ua) {
    return this.iphone(ua) && this.wh.width === 375 && this.wh.height === 667
  },

  iphone678plus (ua) {
    return this.iphone(ua) && this.wh.width === 414 && this.wh.height === 736
  },

  iphonex (ua) {
    return this.iphone(ua) && this.wh.width === 375 && this.wh.height === 812
  },

  linux (ua, platform) {
    return /Linux/.test(platform)
  },

  mac (ua, platform) {
    return /Mac/.test(platform)
  },

  maclike (ua, platform) {
    return this.mac(ua, platform) || this.ios(ua)
  },

  'meizu-phone' (ua) {
    return /Android\s.*MZ(-)?/i.test(ua)
  },

  'meizunote-phone' (ua) {
    return /Android\s.*MZ(-)?.*\snote\s/i.test(ua)
  },

  moz (ua) {
    return (typeof InstallTrigger !== 'undefined' || / Firefox\//i.test(ua))
  },

  opera (ua) {
    return (!!window.opera || /Opera|OPR\//i.test(ua))
  },

  'redmi-phone' (ua) {
    return /Android\s.*Redmi\s/i.test(ua)
  },

  'redminote-phone' (ua) {
    return /Android\s.*Redmi.*\sNote\s/i.test(ua)
  },

  safari (ua) {
    return /^((?!chrome|android).)*safari/i.test(ua)
  },

  webkit (ua) {
    return !!('WebkitAppearance' in document.documentElement.style && !this.edge(ua))
  },

  windows (ua, platform) {
    return /^win/i.test(platform)
  },

  'windows-xp' (ua) {
    return /windows nt 5\.1/i.test(ua)
  },

  'windows-vista' (ua) {
    return /windows nt 6\.0/i.test(ua)
  },

  windows7 (ua) {
    return /windows nt 6\.1/i.test(ua)
  },

  windows8 (ua) {
    return /windows nt 6\.[2|3]/i.test(ua)
  },

  windows10 (ua) {
    return /windows nt 10/i.test(ua)
  },

  'windows-phone' (ua) {
    return /Windows\sPhone/i.test(ua)
  }
}

let width = window.screen.width
let height = window.screen.height
if (width > height) {
  let tmp = height
  height = width
  width = tmp
}

Object.defineProperty(_tests, 'wh', {
  value: {width, height},
  writable: false,
  configurable: false,
  enumerable: false
})

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @namespace
 * @public
 */
const Browserizr = {
  /**
   * @type {string}
   */
  userAgent: window.navigator.userAgent,

  /**
   * @type {string}
   */
  platform: window.navigator.platform,

  /**
   * @param {string} test
   * @return {boolean|null} - null if test not specified
   */
  is (test) {
    if (_tests.hasOwnProperty(test)) {
      return _tests[test](this.userAgent, this.platform)
    }
    console.warn('Browserizr WARN! No test with name "' + test + '"')
    return null
  },

  /**
   * @return {string[]} - array of all positive detects
   */
  check () {
    let results = []
    for (let key in _tests) {
      if (this.is(key)) {
        results.push(key)
      }
    }
    return results
  },

  /**
   * @param {string[]} tests
   * @param {string} [classPrefix=""]
   * @param {Element} [element=document.documentElement]
   */
  addClasses (tests, classPrefix, element) {
    classPrefix = classPrefix || ''
    element = element || document.documentElement

    const classes = tests.map(test => {
      const result = this.is(test)
      if (result === null) {
        return false
      }
      const prefix = result ? '' : 'not-'
      return classPrefix + prefix + test
    }).filter(result => !!result)

    classes.forEach(cssClass => {
      element.classList.add(cssClass.toLowerCase())
    })
  },

  /**
   * @param {string} testName
   * @param {function} testFn
   */
  addTest (testName, testFn) {
    _tests[testName] = testFn
  }
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default Browserizr
