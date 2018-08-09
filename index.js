'use strict'

/**
 * @module
 * @version 1.1.0
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 * @licence MIT
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

  chrome (ua) {
    return (/ Chrome\/\d/i.test(ua) && !this.opera(ua) && !this.safari(ua)) && !/ Edg[e|A|i]\/\d/i.test(ua)
  },

  edge (ua) {
    return / Edge\/\d/i.test(ua)
  },

  'edge-android' (ua) {
    return /\sEdgA\//i.test(ua)
  },

  'edge-ios' (ua) {
    return /\sEdgiOS\//i.test(ua)
  },

  ie (ua) {
    return /(MSIE|Trident)/i.test(ua)
  },

  ie8 (ua) {
    return /MSIE 8\.\d/i.test(ua)
  },

  ie9 (ua) {
    return /MSIE 9\.\d/i.test(ua)
  },

  ie10 (ua) {
    return /MSIE 10\.\d/i.test(ua)
  },

  ie11 (ua) {
    return /Trident.*rv[ :]*11\./.test(ua)
  },

  ios (ua, platform) {
    return this.ipad(ua, platform) || this.ipod(ua, platform) || this.iphone(ua, platform)
  },

  ipad (ua, platform) {
    return /iPad/i.test(platform)
  },

  ipod (ua, platform) {
    return /iPod/i.test(platform)
  },

  iphone (ua, platform) {
    return /iPhone/i.test(platform)
  },

  iphone4 (ua) {
    return this.iphone(ua) && Browserizr.width === 320 && Browserizr.height === 480
  },

  iphone5 (ua) {
    return this.iphone(ua) && Browserizr.width === 320 && Browserizr.height === 568
  },

  iphone678 (ua) {
    return this.iphone(ua) && Browserizr.width === 375 && Browserizr.height === 667
  },

  iphone678plus (ua) {
    return this.iphone(ua) && Browserizr.width === 414 && Browserizr.height === 736
  },

  iphonex (ua) {
    return this.iphone(ua) && Browserizr.width === 375 && Browserizr.height === 812
  },

  linux (ua, platform) {
    return /Linux/.test(platform)
  },

  mac (ua, platform) {
    return /Mac/.test(platform)
  },

  maclike (ua, platform) {
    return this.mac(ua, platform) || this.ios(ua, platform)
  },

  'meizu-phone' (ua) {
    return /Android\s.*MZ(-)?/i.test(ua)
  },

  'meizunote-phone' (ua) {
    return /Android\s.*MZ(-)?.*\snote\s/i.test(ua)
  },

  mobile (ua) {
    return /Mobile/i.test(ua)
  },

  moz (ua) {
    return / Firefox\//i.test(ua)
  },

  opera (ua) {
    return /Opera|OPR\//i.test(ua)
  },

  'redmi-phone' (ua) {
    return /Android\s.*Redmi\s/i.test(ua)
  },

  'redminote-phone' (ua) {
    return /Android\s.*Redmi.*\sNote\s/i.test(ua)
  },

  safari (ua) {
    return / Safari\/\d/.test(ua) && !/ Chrome\/\d/.test(ua)
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

let _width = window.screen.width
let _height = window.screen.height
if (_width > _height) {
  let _tmp = _height
  _height = _width
  _width = _tmp
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @namespace
 * @public
 */
const Browserizr = {
  /**
   * @type {number}
   */
  width: _width,

  /**
   * @type {number}
   */
  height: _height,

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
      return !!_tests[test](this.userAgent, this.platform)
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

    for (let i = 0; i < tests.length; i++) {
      const result = this.is(tests[i])
      if (result === null) {
        continue
      }
      const prefix = result ? '' : 'not-'
      const cssClass = classPrefix + prefix + tests[i]
      element.classList.add(cssClass.toLowerCase())
    }
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
