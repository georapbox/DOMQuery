module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is,
        createElement = u.createElement;

    /**
     * Insert HTML content to the end of every matched element.
     * @param {string|object} content The HTML string or DOM element or DocumentFragment node to insert.
     * @return {object} The DOMQuery object
     */
    return function append(content) {
        var frag;

        iterate(this, function (el) {
            if (is.element(el)) {
                switch (true) {
                    case is.string(content):
                        el.appendChild(createElement(u.trim(content)));
                        break;
                    case is.element(content):
                        el.appendChild(content);
                        break;
                    case is.documentFragmentNode(content):
                        frag = document.createDocumentFragment();
                        frag.appendChild(content);
                        el.appendChild(frag);
                        frag = null;
                        break;
                }
            }
        });

        return this;
    };
}());
