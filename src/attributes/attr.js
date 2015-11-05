module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    return function attr(attrName, attrValue) {
        var validParams = attrName && attrValue && u.is.string(attrName) &&
            (u.is.string(attrValue) || u.is.number(attrValue) || u.is.boolean(attrValue));

        if (validParams) {
            iterate(this, function (el) {
                el.nodeType === 1 && el.setAttribute(attrName, attrValue);
            });
        }

        return this;
    };
}());
