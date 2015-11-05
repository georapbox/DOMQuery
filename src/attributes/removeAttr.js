module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    return function attr(attrName) {
        if (attrName && u.is.string(attrName)) {
            iterate(this, function (el) {
                el.nodeType === 1 && el.removeAttribute(attrName);
            });
        }
        return this;
    };
}());
