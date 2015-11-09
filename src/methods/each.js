module.exports = (function () {
    'use strict';

    /**
     * Iterate over a DOMQuery object, executing a function for each matched element.
     * @param {function} func A function to execute for each mathed element.
     * @return {object} The DOMQuery object
     */
    return function each(func) {
        var i = 0,
            len = this.length;

        for (i; i < len; i += 1) {
            if (func && func(this[i], i) === false) {
                return this;
            }
        }

        return this;
    };
}());
