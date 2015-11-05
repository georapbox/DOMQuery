module.exports = function (item, callback) {
    'use strict';

    var i = 0,
        len = item.length;

    for (i; i < len; i += 1) {
        callback && callback(item[i], i);
    }
};
