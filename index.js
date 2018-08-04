'use strict'

/**
 * @module
 * @version 0.0.1
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

  edgeandroid (ua) {
    return /\sEdgA\//i.test(ua)
  },

  edgeios (ua) {
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

  ipad (ua, platform) {
    return /iPad/.test(platform)
  },

  ipod (ua, platform) {
    return /iPod/.test(platform)
  },

  iphone (ua, platform) {
    return /iPhone/.test(platform)
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
  }
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
   * @param {string[]} testList
   * @param {string} [classPrefix=""]
   * @param {Element} [element=document.documentElement]
   */
  addClasses (testList, classPrefix, element) {
    classPrefix = classPrefix || ''
    element = element || document.documentElement

    const classes = testList.map(test => {
      const result = this.is(test)
      if (result === null) {
        return false
      }
      const prefix = result ? '' : 'no-'
      return prefix + classPrefix + test
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
