module.exports = (function () {
    'use strict';

    // Require dependencies
    var iterate = require('_iterator');

    return function on(eventName, callback) {
        iterate(this, function (el) {
            el.addEventListener(eventName, callback, false);
        });
        return this;
    };
}());
