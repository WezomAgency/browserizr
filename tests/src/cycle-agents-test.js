'use strict'

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import Browserizr from '../../index'
import agents from './browsers-agents'

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * @param {string} testKey
 * @param {string} shouldBeText
 * @param {string} shouldBeNotText
 */
function cycleAgentsTest (testKey, shouldBeText, shouldBeNotText) {
  agents[testKey].forEach(agent => {
    it(`${testKey} - ${shouldBeText}`, () => {
      Browserizr.userAgent = agent
      expect(Browserizr.is(testKey)).toBeTruthy()
    })
  })

  for (let key in agents) {
    if (key === testKey) {
      continue
    }

    agents[key].forEach(agent => {
      it(`${key} - ${shouldBeNotText}`, () => {
        Browserizr.userAgent = agent
        expect(Browserizr.is(testKey)).toBeFalsy()
      })
    })
  }
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default cycleAgentsTest
