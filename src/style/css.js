module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    /**
     * Applies CSS styles to DOM element(s).
     * @param {object} styles Object literal holding CSS style properties.
     * @return {*}
     */
    return function css(styles) {
        /**
         * @private
         * @param {object} element The HTML element to add the syyles on.
         */
        function applyStyles(element) {
            Object.keys(styles).forEach(function (key) {
                element.style[key] = styles[key];
            });
        }

        iterate(this, function (el) {
            u.is.element(el) && applyStyles(el);
        });

        return this;
    };
}());
