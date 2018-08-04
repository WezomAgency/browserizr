var Browserizr = (function () {
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

  var _tests = {
    android: function android (ua) {
      return (/android/i.test(ua)
      )
    },
    android3: function android3 (ua) {
      return (/android 3\./i.test(ua)
      )
    },
    android4: function android4 (ua) {
      return (/android 4\./i.test(ua)
      )
    },
    android5: function android5 (ua) {
      return (/android 5\./i.test(ua)
      )
    },
    android6: function android6 (ua) {
      return (/android 6\./i.test(ua)
      )
    },
    android7: function android7 (ua) {
      return (/android 7\./i.test(ua)
      )
    },
    android8: function android8 (ua) {
      return (/android 8\./i.test(ua)
      )
    },
    blink: function blink (ua) {
      return (window.chrome || window.Intl && window.Intl.v8BreakIterator) && 'CSS' in window && !this.edge(ua)
    },
    chrome: function chrome (ua) {
      return !!window.chrome && !this.opera(ua) && !this.edge(ua)
    },
    edge: function edge (ua) {
      return (/ edge\//i.test(ua)
      )
    },
    edgeandroid: function edgeandroid (ua) {
      return (/\sEdgA\//i.test(ua)
      )
    },
    edgeios: function edgeios (ua) {
      return (/\sEdgiOS\//i.test(ua)
      )
    },
    ie: function ie () {
      return !!document.documentMode
    },
    ie8: function ie8 () {
      return !!(document.all && !document.addEventListener)
    },
    ie9: function ie9 () {
      return !!(document.all && !window.atob && !!document.addEventListener)
    },
    ie10: function ie10 () {
      return !!(document.all && !!window.atob && !!document.addEventListener)
    },
    ie11: function ie11 (ua) {
      return (/Trident.*rv[ :]*11\./.test(ua)
      )
    },
    ios: function ios (ua) {
      return this.ipad(ua) || this.ipod(ua) || this.iphone(ua)
    },
    ipad: function ipad (ua, platform) {
      return (/iPad/.test(platform)
      )
    },
    ipod: function ipod (ua, platform) {
      return (/iPod/.test(platform)
      )
    },
    iphone: function iphone (ua, platform) {
      return (/iPhone/.test(platform)
      )
    },
    mac: function mac (ua, platform) {
      return (/Mac/.test(platform)
      )
    },
    maclike: function maclike (ua, platform) {
      return this.mac(ua, platform) || this.ios(ua, platform)
    },
    'meizu-phone': function meizuPhone (ua) {
      return (/Android\s.*MZ(-)?/i.test(ua)
      )
    },
    'meizunote-phone': function meizunotePhone (ua) {
      return (/Android\s.*MZ(-)?.*\snote\s/i.test(ua)
      )
    },
    moz: function moz (ua) {
      return typeof InstallTrigger !== 'undefined' || / Firefox\//i.test(ua)
    },
    opera: function opera (ua) {
      return !!window.opera || /Opera|OPR\//i.test(ua)
    },
    'redmi-phone': function redmiPhone (ua) {
      return (/Android\s.*Redmi\s/i.test(ua)
      )
    },
    'redminote-phone': function redminotePhone (ua) {
      return (/Android\s.*Redmi.*\sNote\s/i.test(ua)
      )
    }
  }

  // ----------------------------------------
  // Public
  // ----------------------------------------

  /**
   * @namespace
   * @public
   */
  var Browserizr = {
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
    is: function is (test) {
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
    addClasses: function addClasses (testList, classPrefix, element) {
      var _this = this

      classPrefix = classPrefix || ''
      element = element || document.documentElement

      var classes = testList.map(function (test) {
        var result = _this.is(test)
        if (result === null) {
          return false
        }
        var prefix = result ? '' : 'no-'
        return prefix + classPrefix + test
      }).filter(function (result) {
        return !!result
      })

      classes.forEach(function (cssClass) {
        element.classList.add(cssClass.toLowerCase())
      })
    },

    /**
     * @param {string} testName
     * @param {function} testFn
     */
    addTest: function addTest (testName, testFn) {
      _tests[testName] = testFn
    }
  }

  return Browserizr
}())
