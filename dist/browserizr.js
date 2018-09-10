var Browserizr = (function () {
  'use strict'

  /**
   * @module
   * @version 2.0.0
   * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
   * @licence MIT
   */

  // ----------------------------------------
  // Private
  // ----------------------------------------

  var _w = window.screen.width
  var _h = window.screen.height
  if (_w > _h) {
    var _t = _h
    _h = _w
    _w = _t
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
    width: _w,

    /**
     * @type {number}
     */
    height: _h,

    /**
     * @type {string}
     */
    userAgent: window.navigator.userAgent,

    /**
     * @type {string}
     */
    platform: window.navigator.platform,

    detect: function detect () {
      var ua = this.userAgent
      var platform = this.platform
      var width = this.width
      var height = this.height
      var self = this

      self.is_android = /android/i.test(ua)
      self.is_android3 = /android 3\./i.test(ua)
      self.is_android4 = /android 4\./i.test(ua)
      self.is_android5 = /android 5\./i.test(ua)
      self.is_android6 = /android 6\./i.test(ua)
      self.is_android7 = /android 7\./i.test(ua)
      self.is_android8 = /android 8\./i.test(ua)
      self.is_meizu_phone = /Android\s.*MZ(-)?/i.test(ua)
      self.is_meizunote_phone = /Android\s.*MZ(-)?.*\snote\s/i.test(ua)
      self.is_redmi_phone = /Android\s.*Redmi\s/i.test(ua)
      self.is_redminote_phone = /Android\s.*Redmi.*\sNote\s/i.test(ua)

      self.is_ipad = /iPad/i.test(platform)
      self.is_ipod = /iPod/i.test(platform)
      self.is_iphone = /iPhone/i.test(platform)
      self.is_iphone4 = self.is_iphone && width === 320 && height === 480
      self.is_iphone5 = self.is_iphone && width === 320 && height === 568
      self.is_iphone678 = self.is_iphone && width === 375 && height === 667
      self.is_iphone678plus = self.is_iphone && width === 414 && height === 736
      self.is_iphonex = self.is_iphone && width === 375 && height === 812
      self.is_ios = self.is_ipad || self.is_ipod || self.is_iphone

      self.is_mac = /Mac/.test(platform)
      self.is_maclike = self.is_mac || self.is_ios

      self.is_blackberry = /BlackBerry/i.test(ua)
      self.is_blackberry10 = /BB10;/i.test(ua)

      self.is_moz = / Firefox\//i.test(ua)
      self.is_opera = /Opera|OPR\//i.test(ua)
      self.is_safari = / Safari\/\d/.test(ua) && !/ Chrome\/\d/.test(ua)
      self.is_chrome = / Chrome\/\d/i.test(ua) && !self.is_opera && !self.is_safari && !/ Edg[e|A|i]\/\d/i.test(ua)

      self.is_ie = /(MSIE|Trident)/i.test(ua)
      self.is_ie8 = /MSIE 8\.\d/i.test(ua)
      self.is_ie9 = /MSIE 9\.\d/i.test(ua)
      self.is_ie10 = /MSIE 10\.\d/i.test(ua)
      self.is_ie11 = /Trident.*rv[ :]*11\./.test(ua)

      self.is_edge = / Edge\/\d/i.test(ua)
      self.is_edge_android = /\sEdgA\//i.test(ua)
      self.is_edge_ios = /\sEdgiOS\//i.test(ua)
      self.is_windows_phone = /\sEdgiOS\//i.test(ua)

      self.is_windows = /^win/i.test(platform)
      self.is_windows_xp = /windows nt 5\.1/i.test(ua)
      self.is_windows_vista = /windows nt 6\.0/i.test(ua)
      self.is_windows7 = /windows nt 6\.1/i.test(ua)
      self.is_windows8 = /windows nt 6\.[2|3]/i.test(ua)
      self.is_windows10 = /windows nt 10/i.test(ua)

      self.is_mobile = self.is_ios || self.is_android || self.is_edge_android || self.is_edge_ios || self.is_windows_phone || self.is_blackberry || self.is_blackberry10
      self.is_desktop = !self.is_mobile
    },

    /**
     * @return {string[]} - array of all positive detects
     */
    detected: function detected () {
      var results = []
      for (var key in this) {
        if (/^is_/.test(key) && this[key]) {
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
        var key = tests[i]
        if (/^is_/.test(key)) {
          var result = this[key]
          var prefix = result ? 'is' : 'is-not'
          var cssClass = classPrefix + key.replace(/_/, '-').replace(/^is/, prefix)
          classes.push(cssClass.toLowerCase())
        }
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
    }
  }

  Browserizr.detect()

  return Browserizr
}())
