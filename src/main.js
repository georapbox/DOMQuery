/**
 * @package: DOMQuery.js
 */
(function (win, doc, undefined) {
    'use strict';

    // Require dependancies
    var pkg = require('package.json');

    win[pkg.name] = win[pkg.alias] = require('core');

    var fn = win[pkg.name].fn;

    fn.css = require('style/css');
    fn.show = require('style/show-hide').show;
    fn.hide = require('style/show-hide').hide;

    fn.addClass = require('attributes/class').addClass;
    fn.removeClass = require('attributes/class').removeClass;
    fn.toggleClass = require('attributes/class').toggleClass;
    fn.hasClass = require('attributes/class').hasClass;
    fn.attr = require('attributes/attr');
    fn.removeAttr = require('attributes/removeAttr');

    fn.each = require('traversing/each');
    fn.parent = require('traversing/parent');

    fn.on = require('events/on');
    fn.off = require('events/off');
}(window, document));
