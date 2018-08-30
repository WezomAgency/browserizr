var Browserizr = (function () {
  'use strict'

  /**
   * @module
   * @version 1.2.0
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
    chrome: function chrome (ua) {
      return (/ Chrome\/\d/i.test(ua) && !this.opera(ua) && !this.safari(ua) && !/ Edg[e|A|i]\/\d/i.test(ua)
      )
    },
    edge: function edge (ua) {
      return (/ Edge\/\d/i.test(ua)
      )
    },
    'edge-android': function edgeAndroid (ua) {
      return (/\sEdgA\//i.test(ua)
      )
    },
    'edge-ios': function edgeIos (ua) {
      return (/\sEdgiOS\//i.test(ua)
      )
    },
    ie: function ie (ua) {
      return (/(MSIE|Trident)/i.test(ua)
      )
    },
    ie8: function ie8 (ua) {
      return (/MSIE 8\.\d/i.test(ua)
      )
    },
    ie9: function ie9 (ua) {
      return (/MSIE 9\.\d/i.test(ua)
      )
    },
    ie10: function ie10 (ua) {
      return (/MSIE 10\.\d/i.test(ua)
      )
    },
    ie11: function ie11 (ua) {
      return (/Trident.*rv[ :]*11\./.test(ua)
      )
    },
    ios: function ios (ua, platform) {
      return this.ipad(ua, platform) || this.ipod(ua, platform) || this.iphone(ua, platform)
    },
    ipad: function ipad (ua, platform) {
      return (/iPad/i.test(platform)
      )
    },
    ipod: function ipod (ua, platform) {
      return (/iPod/i.test(platform)
      )
    },
    iphone: function iphone (ua, platform) {
      return (/iPhone/i.test(platform)
      )
    },
    iphone4: function iphone4 (ua) {
      return this.iphone(ua) && Browserizr.width === 320 && Browserizr.height === 480
    },
    iphone5: function iphone5 (ua) {
      return this.iphone(ua) && Browserizr.width === 320 && Browserizr.height === 568
    },
    iphone678: function iphone678 (ua) {
      return this.iphone(ua) && Browserizr.width === 375 && Browserizr.height === 667
    },
    iphone678plus: function iphone678plus (ua) {
      return this.iphone(ua) && Browserizr.width === 414 && Browserizr.height === 736
    },
    iphonex: function iphonex (ua) {
      return this.iphone(ua) && Browserizr.width === 375 && Browserizr.height === 812
    },
    linux: function linux (ua, platform) {
      return (/Linux/.test(platform)
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
    mobile: function mobile (ua, platform) {
      return this.android(ua) || this['edge-android'](ua) || this['edge-ios'](ua) || this['windows-phone'](ua) || this.ipad(ua, platform) || this.ipod(ua, platform) || this.iphone(ua, platform)
    },
    moz: function moz (ua) {
      return (/ Firefox\//i.test(ua)
      )
    },
    opera: function opera (ua) {
      return (/Opera|OPR\//i.test(ua)
      )
    },
    'redmi-phone': function redmiPhone (ua) {
      return (/Android\s.*Redmi\s/i.test(ua)
      )
    },
    'redminote-phone': function redminotePhone (ua) {
      return (/Android\s.*Redmi.*\sNote\s/i.test(ua)
      )
    },
    safari: function safari (ua) {
      return (/ Safari\/\d/.test(ua) && !/ Chrome\/\d/.test(ua)
      )
    },
    windows: function windows (ua, platform) {
      return (/^win/i.test(platform)
      )
    },
    'windows-xp': function windowsXp (ua) {
      return (/windows nt 5\.1/i.test(ua)
      )
    },
    'windows-vista': function windowsVista (ua) {
      return (/windows nt 6\.0/i.test(ua)
      )
    },
    windows7: function windows7 (ua) {
      return (/windows nt 6\.1/i.test(ua)
      )
    },
    windows8: function windows8 (ua) {
      return (/windows nt 6\.[2|3]/i.test(ua)
      )
    },
    windows10: function windows10 (ua) {
      return (/windows nt 10/i.test(ua)
      )
    },
    'windows-phone': function windowsPhone (ua) {
      return (/Windows\sPhone/i.test(ua)
      )
    }
  }

  var _width = window.screen.width
  var _height = window.screen.height
  if (_width > _height) {
    var _tmp = _height
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
  var Browserizr = {
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
    is: function is (test) {
      if (_tests.hasOwnProperty(test)) {
        return !!_tests[test](this.userAgent, this.platform)
      }
      console.warn('Browserizr WARN! No test with name "' + test + '"')
      return null
    },

    /**
     * @return {string[]} - array of all positive detects
     */
    check: function check () {
      var results = []
      for (var key in _tests) {
        if (this.is(key)) {
          results.push(key)
        }
      }
      return results
    },

    /**
     * @param {string[]} tests
     * @param {string} [classPrefix=""]
     * @param {HTMLElement} [element=document.documentElement]
     */
    addClasses: function addClasses (tests, classPrefix, element) {
      classPrefix = classPrefix || ''
      element = element || document.documentElement
      var classes = []

      for (var i = 0; i < tests.length; i++) {
        var result = this.is(tests[i])
        if (result === null) {
          continue
        }
        var prefix = result ? '' : 'not-'
        var cssClass = classPrefix + prefix + tests[i]
        classes.push(cssClass.toLowerCase())
      }

      if (element.jquery) {
        element.addClass(classes.join(' '))
      } else if (element.length) {
        for (var _i = 0; _i < element.length; _i++) {
          add(element[_i])
        }
      } else {
        add(element)
      }

      /**
       * @param {HTMLElement} el
       */
      function add (el) {
        for (var _i2 = 0; _i2 < classes.length; _i2++) {
          el.classList.add(classes[_i2])
        }
      }
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
