module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    /**
     * @private
     * Iterates each mached element and sets the display property.
     * @param {object} obj The DOMQuery object.
     * @param {string} value The value of "display" property.
     */
    function setDisplay(obj, value) {
        iterate(obj, function (el) {
            if (u.is.element(el)) {
                el.style.display = value;
            }
        });
    }

    return {
        show: function () {
            setDisplay(this, 'block');
            return this;
        },
        hide: function () {
            setDisplay(this, 'none');
            return this;
        }
    };
}());
