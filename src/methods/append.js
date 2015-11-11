module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is;

    /**
     * Insert HTML content to the end of every matched element.
     * @param {string} htmlString The HTML string to insert.
     * @return {object} The DOMQuery object
     */
    return function append(htmlString) {
        iterate(this, function (el) {
            if (is.element(el) && is.string(htmlString)) {
                el.innerHTML += htmlString;
            }
        });

        return this;
    };
}());
