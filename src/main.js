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
    fn.addClass = require('methods/class').addClass;
    fn.append = require('methods/append');
    fn.attr = require('methods/attr');
    fn.css = require('methods/css');
    fn.each = require('methods/each');
    fn.hasClass = require('methods/class').hasClass;
    fn.html = require('methods/html');
    fn.next = require('methods/next-prev').next;
    fn.off = require('methods/off');
    fn.on = require('methods/on');
    fn.parent = require('methods/parent');
    fn.prev = require('methods/next-prev').prev;
    fn.ready = require('methods/ready');
    fn.removeAttr = require('methods/removeAttr');
    fn.removeClass = require('methods/class').removeClass;
    fn.toggleClass = require('methods/class').toggleClass;
}(window, document));
