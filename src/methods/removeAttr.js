module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is;

    /**
     * Remove one or more attributes from each element in the set of matched elements.
     * @param {string} attrName The attribute(s) (space-separated) to remove.
     * @return {object} The DOMQuery object.
     */
    return function attr(attrName) {
        var attrs;

        if (attrName && is.string(attrName)) {
            attrs = u.trim(attrName).split(' ');
            iterate(this, function (el) {
                attrs.forEach(function (attr) {
                    is.element(el) && el.removeAttribute(attr);
                });
            });
        }
        return this;
    };
}());
