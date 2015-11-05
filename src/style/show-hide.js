module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = require('_iterator');

    function setDisplay(context, mode) {
        iterate(context, function (el) {
            if (u.is.element(el)) {
                el.style.display = mode;
            }
        });
    }

    return {
        show: function () {
            setDisplay(this, 'block');
            return this;
        },
        hide: function () {
            setDisplay(this, 'none');
            return this;
        }
    };
}());
