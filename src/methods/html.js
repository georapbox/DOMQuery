module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is;

    /**
     * Set the HTML contents of every matched element or
     * get the HTML contents of the first element in the matched elements set.
     * @param {string} [htmlString] An HTML string to set as the content of each matched element.
     * @return {object|string} The DOMQuery object or a string representing the HTML content of the matched element.
     */
    return function html(htmlString) {
        // Get the HTML contents
        if (is.nullOrUndefined(htmlString) && is.element(this[0])) {
            return this[0].innerHTML || undefined;
        }

        // Set the HTML content
        iterate(this, function (el) {
            if (is.element(el) && is.string(htmlString)) {
                el.innerHTML = htmlString;
            }
        });

        return this;
    };
}());
