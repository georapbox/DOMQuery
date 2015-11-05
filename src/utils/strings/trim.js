/**
 * @module utils/strings/trim
 */
module.exports = (function () {
    'use strict';

    /**
     * Removes whitespace from both ends of a string.
     * @param {String} str The string to trim.
     */
    function trim(str) {
        return String.prototype.trim ? str.trim() : str.replace(/(^\s*|\s*$)/g, '');
    }

    return trim;
}());
