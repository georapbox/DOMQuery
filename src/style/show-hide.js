module.exports = (function () {
    'use strict';

    // Require dependencies
    var iterate = require('_iterator');

    function setDisplay(context, mode) {
        iterate(context, function (el) {
            if (el.nodeType === 1) {
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
