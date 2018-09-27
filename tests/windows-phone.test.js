'use strict'

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import cycleAgentsTest from './src/cycle-agents-test'

// ----------------------------------------
// Tests
// ----------------------------------------

cycleAgentsTest('is_windows_phone', 'Should be Windows Phone', 'Should be NOT Windows Phone', ['is_edge'])
