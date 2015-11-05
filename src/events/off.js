module.exports = (function () {
    'use strict';

    // Require dependencies
    var iterate = require('_iterator');

    return function off(eventName, callback) {
        iterate(this, function (el) {
            el.removeEventListener(eventName, callback, false);
        });
        return this;
    };
}());
