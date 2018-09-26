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
  if (shouldBeText) {
    agents[testKey].forEach(agent => {
      it(`${testKey} - ${shouldBeText}`, () => {
        Browserizr.userAgent = agent
        Browserizr.detect()
        expect(Browserizr[testKey]).toBeTruthy()
      })
    })
  }

  if (shouldBeNotText) {
    for (let key in agents) {
      if (key === testKey) {
        continue
      }
      agents[key].forEach(agent => {
        it(`${key} - ${shouldBeNotText}`, () => {
          Browserizr.userAgent = agent
          Browserizr.detect()
          expect(Browserizr[testKey]).toBeFalsy()
        })
      })
    }
  }
}

// ----------------------------------------
// Exports
// ----------------------------------------

export default cycleAgentsTest
