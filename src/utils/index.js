/**
 * @module utils/index
 */
module.exports = (function () {
    'use strict';

    return {
        is: require('utils/misc/is'),
        iterator: require('utils/misc/iterator'),
        trim: require('utils/strings/trim')
    };
}());
