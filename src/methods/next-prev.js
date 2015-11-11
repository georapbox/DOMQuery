module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator;

    /**
     * @private
     * Get the immediately following or preceding sibling of each element in the set of matched elements.
     * @param {object} context The DOMQuery object
     * @param {string} method The mothod to call. For .next() is "nextElementSibling", for .prev() is "previousElementSibling".
     * return {object} The DOMQuery object
     */
    function nextPrev(context, method) {
        var that = context,
            res = [],
            selector = that.selector;

        iterate(that, function (el) {
            el && el[method] && res.push(el[method]);
        });

        that = Object.create(that);
        that.length = res.length;
        that.selector = selector;

        res.forEach(function (element, index) {
            that[index] = element;
        });

        return that;
    }

    return {
        next: function () {
            return nextPrev(this, 'nextElementSibling');
        },
        prev: function () {
            return nextPrev(this, 'previousElementSibling');
        }
    };
}());
