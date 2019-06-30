'use strict';

/**
 * Local dependencies
 */

var Ruler = require("./ruler.js");

/**
 * Core parser `rules`
 */

var _rules = [['block', require("./rules_core/block.js")], ['abbr', require("./rules_core/abbr.js")], ['references', require("./rules_core/references.js")], ['inline', require("./rules_core/inline.js")], ['footnote_tail', require("./rules_core/footnote_tail.js")], ['abbr2', require("./rules_core/abbr2.js")], ['replacements', require("./rules_core/replacements.js")], ['smartquotes', require("./rules_core/smartquotes.js")], ['linkify', require("./rules_core/linkify.js")]];

/**
 * Class for top level (`core`) parser rules
 *
 * @api private
 */

function Core() {
  this.options = {};
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}

/**
 * Process rules with the given `state`
 *
 * @param  {Object} `state`
 * @api private
 */

Core.prototype.process = function (state) {
  var i, l, rules;
  rules = this.ruler.getRules('');
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

/**
 * Expose `Core`
 */

module.exports = Core;