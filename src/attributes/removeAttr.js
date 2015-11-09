module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    /**
     * Remove one or more attributes from each element in the set of matched elements.
     * @param {string} attrName The attribute(s) (space-seperated) to remove.
     * @return {object} The DOMQuery object.
     */
    return function attr(attrName) {
        var attrs;

        if (attrName && u.is.string(attrName)) {
            attrs = u.trim(attrName).split(' ');
            iterate(this, function (el) {
                attrs.forEach(function (attr) {
                    u.is.element(el) && el.removeAttribute(attr);
                });
            });
        }
        return this;
    };
}());
