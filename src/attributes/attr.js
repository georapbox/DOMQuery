module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    /**
     * Set one or more attributes for every matched element or
     * get the value of an attribute for the first element in the matched elements.
     * @param {object|string} attributes An object of attribute-value pairs to set or the attribute name to get.
     * @return {object|string} If used as setter returns the DOMQuery object, else returns the attribute value if exists else undefined.
     */
    return function attr(attributes) {
        // Get attribute value
        if (u.is.string(attributes) && u.is.element(this[0])) {
            return this[0].getAttribute(attributes) || undefined;
        }

        // Set attributes
        if (u.is.plainObject(attributes)) {
            iterate(this, function (el) {
                Object.keys(attributes).forEach(function (attrName) {
                    u.is.element(el) && el.setAttribute(attrName, attributes[attrName]);
                });
            });
            return this;
        }
    };
}());
