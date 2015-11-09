module.exports = (function () {
    'use strict';

    // Require dependancies
    var iterate = require('_iterator');
    
    return function each(callback) {
        iterate(this, function (el, index) {
            callback && callback(el, index);
        });
        return this;
    };
}());
