'use strict';

/**
 *
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const rollupPluginBabel = require('rollup-plugin-babel');

// ----------------------------------------
// Exports
// ----------------------------------------

export default {
  input: './index.js',
  output: {
    file: './dist/browserizr.js',
    format: 'iife',
    name: 'Browserizr'
  },
  plugins: [
    rollupPluginBabel({
      babelrc: false,
      presets: [
        ['env', {modules: false}]
      ]
    })
  ]
};
