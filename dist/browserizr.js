var Browserizr = (function () {
  'use strict'

  /**
   * @module
   * @version 3.1.0
   * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
   * @see {@link https://wezomagency.github.io/browserizr/}
   * @licence MIT
   */

  /* eslint-disable no-return-assign */

  // ----------------------------------------
  // Public
  // ----------------------------------------

  var Browserizr = (function (window, navigator, screen) {
    var ua = navigator.userAgent
    var platform = navigator.platform
    var width = screen.width
    var height = screen.height
    if (width > height) {
      var temp = height
      height = width
      width = temp
    }

    /**
     * @constructor
     */
    function Browserizr () {}

    var isAndroid = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid = function () {
      return isAndroid === null ? isAndroid = /android/i.test(ua) : isAndroid
    }

    var isAndroid3 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid3 = function () {
      return isAndroid3 === null ? isAndroid3 = /android 3/i.test(ua) : isAndroid3
    }

    var isAndroid4 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid4 = function () {
      return isAndroid4 === null ? isAndroid4 = /android 4/i.test(ua) : isAndroid4
    }

    var isAndroid5 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid5 = function () {
      return isAndroid5 === null ? isAndroid5 = /android 5/i.test(ua) : isAndroid5
    }

    var isAndroid6 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid6 = function () {
      return isAndroid6 === null ? isAndroid6 = /android 6/i.test(ua) : isAndroid6
    }

    var isAndroid7 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid7 = function () {
      return isAndroid7 === null ? isAndroid7 = /android 7/i.test(ua) : isAndroid7
    }

    var isAndroid8 = null
    /** @return {boolean} */
    Browserizr.prototype.isAndroid8 = function () {
      return isAndroid8 === null ? isAndroid8 = /android 8/i.test(ua) : isAndroid8
    }

    var isMeizuPhone = null
    /** @return {boolean} */
    Browserizr.prototype.isMeizuPhone = function () {
      return isMeizuPhone === null ? isMeizuPhone = /Android\s.*MZ(-)?/i.test(ua) : isMeizuPhone
    }

    var isMeizuNotePhone = null
    /** @return {boolean} */
    Browserizr.prototype.isMeizuNotePhone = function () {
      return isMeizuNotePhone === null ? isMeizuNotePhone = /Android\s.*MZ(-)?.*\snote\s/i.test(ua) : isMeizuNotePhone
    }

    var isRedmiPhone = null
    /** @return {boolean} */
    Browserizr.prototype.isRedmiPhone = function () {
      return isRedmiPhone === null ? isRedmiPhone = /Android\s.*Redmi\s/i.test(ua) : isRedmiPhone
    }

    var isRedmiNotePhone = null
    /** @return {boolean} */
    Browserizr.prototype.isRedmiNotePhone = function () {
      return isRedmiNotePhone === null ? isRedmiNotePhone = /Android\s.*Redmi.*\sNote\s/i.test(ua) : isRedmiNotePhone
    }

    var isIPad = null
    /** @return {boolean} */
    Browserizr.prototype.isIPad = function () {
      return isIPad === null ? isIPad = /iPad/i.test(ua) : isIPad
    }

    var isIPod = null
    /** @return {boolean} */
    Browserizr.prototype.isIPod = function () {
      return isIPod === null ? isIPod = /iPod/i.test(ua) : isIPod
    }

    var isIPhone = null
    /** @return {boolean} */
    Browserizr.prototype.isIPhone = function () {
      return isIPhone === null ? isIPhone = /iPhone/i.test(ua) : isIPhone
    }

    /** @return {boolean} */
    Browserizr.prototype.isIPhone4 = function () {
      return this.isIPhone() && width === 320 && height === 480
    }

    /** @return {boolean} */
    Browserizr.prototype.isIPhone5 = function () {
      return this.isIPhone() && width === 320 && height === 568
    }

    /** @return {boolean} */
    Browserizr.prototype.isIPhone678 = function () {
      return this.isIPhone() && width === 375 && height === 667
    }

    /** @return {boolean} */
    Browserizr.prototype.isIPhone678plus = function () {
      return this.isIPhone() && width === 414 && height === 736
    }

    /** @return {boolean} */
    Browserizr.prototype.isIPhoneX = function () {
      return this.isIPhone() && width === 375 && height === 812
    }

    /** @return {boolean} */
    Browserizr.prototype.isIOS = function () {
      return this.isIPad() || this.isIPod() || this.isIPhone()
    }

    var isMac = null
    /** @return {boolean} */
    Browserizr.prototype.isMac = function () {
      return isMac === null ? isMac = /Mac/.test(platform) : isMac
    }

    /** @return {boolean} */
    Browserizr.prototype.isMacLike = function () {
      return this.isMac() || this.isIOS()
    }

    var isBlackBerry = null
    /** @return {boolean} */
    Browserizr.prototype.isBlackBerry = function () {
      return isBlackBerry === null ? isBlackBerry = /BlackBerry/i.test(ua) : isBlackBerry
    }

    var isBlackBerry10 = null
    /** @return {boolean} */
    Browserizr.prototype.isBlackBerry10 = function () {
      return isBlackBerry10 === null ? isBlackBerry10 = /BB10;/i.test(ua) : isBlackBerry10
    }

    var isMoz = null
    /** @return {boolean} */
    Browserizr.prototype.isMoz = function () {
      return isMoz === null ? isMoz = / Firefox\//i.test(ua) : isMoz
    }

    var isOpera = null
    /** @return {boolean} */
    Browserizr.prototype.isOpera = function () {
      return isOpera === null ? isOpera = /Opera|OPR\//i.test(ua) : isOpera
    }

    var isSafari = null
    /** @return {boolean} */
    Browserizr.prototype.isSafari = function () {
      return isSafari === null ? isSafari = / Safari\/\d/.test(ua) && !/ Chrome\/\d/.test(ua) : isSafari
    }

    var isChrome = null
    /** @return {boolean} */
    Browserizr.prototype.isChrome = function () {
      if (isChrome === null) {
        isChrome = / Chrome\/\d/i.test(ua) && !(this.isOpera() || this.isSafari() || this.isEdge() || this.isEdgeIOS() || this.isEdgeAndroid())
      }
      return isChrome
    }

    var isIE = null
    /** @return {boolean} */
    Browserizr.prototype.isIE = function () {
      return isIE === null ? isIE = /(MSIE|Trident)/i.test(ua) : isIE
    }

    var isIE8 = null
    /** @return {boolean} */
    Browserizr.prototype.isIE8 = function () {
      return isIE8 === null ? isIE8 = /MSIE 8\.\d/i.test(ua) : isIE8
    }

    var isIE9 = null
    /** @return {boolean} */
    Browserizr.prototype.isIE9 = function () {
      return isIE9 === null ? isIE9 = /MSIE 9\.\d/i.test(ua) : isIE9
    }

    var isIE10 = null
    /** @return {boolean} */
    Browserizr.prototype.isIE10 = function () {
      return isIE10 === null ? isIE10 = /MSIE 10\.\d/i.test(ua) : isIE10
    }

    var isIE11 = null
    /** @return {boolean} */
    Browserizr.prototype.isIE11 = function () {
      return isIE11 === null ? isIE11 = /Trident.*rv[ :]*11\./.test(ua) : isIE11
    }

    var isEdge = null
    /** @return {boolean} */
    Browserizr.prototype.isEdge = function () {
      return isEdge === null ? isEdge = / Edge\/\d/i.test(ua) : isEdge
    }

    var isEdgeIOS = null
    /** @return {boolean} */
    Browserizr.prototype.isEdgeIOS = function () {
      return isEdgeIOS === null ? isEdgeIOS = /\sEdgiOS\//i.test(ua) : isEdgeIOS
    }

    var isEdgeAndroid = null
    /** @return {boolean} */
    Browserizr.prototype.isEdgeAndroid = function () {
      return isEdgeAndroid === null ? isEdgeAndroid = /\sEdgA\//i.test(ua) : isEdgeAndroid
    }

    var isWindowsPhone = null
    /** @return {boolean} */
    Browserizr.prototype.isWindowsPhone = function () {
      return isWindowsPhone === null ? isWindowsPhone = /Windows\sPhone/i.test(ua) : isWindowsPhone
    }

    var isWindows = null
    /** @return {boolean} */
    Browserizr.prototype.isWindows = function () {
      return isWindows === null ? isWindows = /^win/i.test(platform) : isWindows
    }

    var isWindowsXP = null
    /** @return {boolean} */
    Browserizr.prototype.isWindowsXP = function () {
      return isWindowsXP === null ? isWindowsXP = /windows nt 5\.1/i.test(ua) : isWindowsXP
    }

    var isWindowsVista = null
    /** @return {boolean} */
    Browserizr.prototype.isWindowsVista = function () {
      return isWindowsVista === null ? isWindowsVista = /windows nt 6\.0/i.test(ua) : isWindowsVista
    }

    var isWindows7 = null
    /** @return {boolean} */
    Browserizr.prototype.isWindows7 = function () {
      return isWindows7 === null ? isWindows7 = /windows nt 6\.1/i.test(ua) : isWindows7
    }

    var isWindows8 = null
    /** @return {boolean} */
    Browserizr.prototype.isWindows8 = function () {
      return isWindows8 === null ? isWindows8 = /windows nt 6\.[2|3]/i.test(ua) : isWindows8
    }

    var isWindows10 = null
    /** @return {boolean} */
    Browserizr.prototype.isWindows10 = function () {
      return isWindows10 === null ? isWindows10 = /windows nt 10/i.test(ua) : isWindows10
    }

    var isLinux = null
    /** @return {boolean} */
    Browserizr.prototype.isLinux = function () {
      return isLinux === null ? isLinux = /^linux/i.test(platform) : isLinux
    }

    /** @return {boolean} */
    Browserizr.prototype.isMobile = function () {
      return this.isIOS() || this.isAndroid() || this.isEdgeIOS() || this.isEdgeAndroid() || this.isWindowsPhone() || this.isBlackBerry() || this.isBlackBerry10()
    }

    /** @return {boolean} */
    Browserizr.prototype.isDesktop = function () {
      return !this.isMobile()
    }

    /**
     * @param {string[]} tests
     * @param {string} [classPrefix=""]
     * @param {boolean} [toString=true]
     * @return {string[]}
     */
    Browserizr.prototype.cssClasses = function (tests, classPrefix) {
      classPrefix = classPrefix || ''
      var classes = []

      for (var i = 0; i < tests.length; i++) {
        var key = tests[i]
        var method = 'is' + key
        if (this[method] !== undefined) {
          var result = this[method]()
          var prefix = result ? prefixIs : prefixIsNot
          classes.push(classPrefix + prefix + key.toLowerCase())
        } else {
          console.warn('Browserizr has no the test "' + method + '()"')
        }
      }

      return classes
    }

    var instance = null
    var prefixIs = 'is-'
    var prefixIsNot = 'is-not-'

    return {
      /**
       * @static
       * @public
       * @return {Browserizr}
       */
      detect: function detect () {
        return instance === null ? instance = new Browserizr() : instance
      },

      /**
       * @type string
       */
      get prefixIs () {
        return prefixIs
      },

      /**
       * @type string
       */
      set prefixIs (value) {
        prefixIs = value
      },

      /**
       * @type string
       */
      get prefixIsNot () {
        return prefixIsNot
      },

      /**
       * @type string
       */
      set prefixIsNot (value) {
        prefixIsNot = value
      }
    }
  }(window, window.navigator, window.screen))

  return Browserizr
}())
