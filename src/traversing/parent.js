module.exports = (function () {
    'use strict';

    // Require dependancies
    var iterate = require('_iterator');

    return function parent() {
        var that = this,
            temp = [],
            final = [],
            selector = that.selector;

        iterate(that, function (el) {
            el && el.parentNode && temp.push(el.parentNode);
        });

        final = temp.filter(function (elem, pos) {
            return temp.indexOf(elem) === pos;
        });

        that = Object.create(that);
        that.length = final.length;
        that.selector = selector + '.parent()';

        final.forEach(function (element, index) {
            that[index] = element;
        });

        return that;
    };
}());
