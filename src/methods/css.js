module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is;

    /**
     * Set one or more CSS properties for the set of matched elements or
     * get the computed style properties for the first element in the set of matched elements.
     * @param {object|string} properties An object of property-value pairs to set or a string representing the property name.
     * @return {object|string} The DOMQuery object or a string representing the value of the property.
     */
    return function css(properties) {
        /**
         * @private
         * @param {object} element The HTML element to add the styles on.
         */
        function applyStyles(element) {
            is.plainObject(properties) && Object.keys(properties).forEach(function (key) {
                element.style[key] = properties[key];
            });
        }

        // Get the value of property
        if (is.string(properties) && is.element(this[0])) {
            return getComputedStyle(this[0], null).getPropertyValue(properties) || undefined;
        }

        // Set the css properties
        iterate(this, function (el) {
            is.element(el) && applyStyles(el);
        });

        return this;
    };
}());
