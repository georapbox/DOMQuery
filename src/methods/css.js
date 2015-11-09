module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    /**
     * Set one or more CSS properties for the set of matched elements.
     * @param {object} styles An object of property-value pairs to set.
     * @return {object} The DOMQuery object
     */
    return function css(styles) {
        /**
         * @private
         * @param {object} element The HTML element to add the styles on.
         */
        function applyStyles(element) {
            u.is.plainObject(styles) && Object.keys(styles).forEach(function (key) {
                element.style[key] = styles[key];
            });
        }

        iterate(this, function (el) {
            u.is.element(el) && applyStyles(el);
        });

        return this;
    };
}());
