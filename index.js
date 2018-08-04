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
  chrome (userAgent, platform) {
    var chrome = !!window.chrome && userAgent.match(/Opera|OPR\//i) === null
    var edge = / edge\//i.test(userAgent)
    return chrome && !edge
  }
}

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @namespace
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
   *
   * @param {string} test
   * @return {boolean|null} - null if test not specified
   */
  is (test) {
    if (_tests.hasOwnProperty(test)) {
      return _tests[test](this.userAgent, this.platform)
    }
    console.warn('Browserizr WARN! No test with name "' + test + '"')
    return null
  }
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default Browserizr
