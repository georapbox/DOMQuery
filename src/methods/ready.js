module.exports = (function () {
    'use strict';

    // Require dependancies
    var u = require('utils/index'),
        is = u.is;

    return function ready(handler) {
        var selector = this[0];
        if (is.not.documentNode(selector)) {
            return this;
        }
        selector.addEventListener('DOMContentLoaded', handler, false);
        return this;
    };
}());
