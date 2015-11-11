/**
 * @package: DOMQuery.js
 */
(function (win, doc, undefined) {
    'use strict';

    // Require dependancies
    var pkg = require('package.json');

    win[pkg.name] = win[pkg.alias] = require('core');

    var fn = win[pkg.name].fn;

    // API methods: Delete or comment out any methods we don't need for our build
    fn.attr = require('methods/attr');
    fn.removeAttr = require('methods/removeAttr');
    fn.addClass = require('methods/class').addClass;
    fn.removeClass = require('methods/class').removeClass;
    fn.toggleClass = require('methods/class').toggleClass;
    fn.hasClass = require('methods/class').hasClass;
    fn.css = require('methods/css');
    fn.each = require('methods/each');
    fn.parent = require('methods/parent');
    fn.on = require('methods/on');
    fn.off = require('methods/off');
    fn.next = require('methods/next-prev').next;
    fn.prev = require('methods/next-prev').prev;
    fn.html = require('methods/html');
}(window, document));
