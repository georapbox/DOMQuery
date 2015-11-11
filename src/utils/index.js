/**
 * @module utils/index
 */
module.exports = (function () {
    'use strict';

    return {
        is: require('utils/misc/is'),
        iterator: require('utils/misc/iterator'),
        createElement: require('utils/misc/createElement'),
        trim: require('utils/strings/trim')
    };
}());
