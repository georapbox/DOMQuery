module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator,
        is = u.is;

    /**
     * @private
     * @param {string} action The action to be taken. Eg "add", "remove" or "toggle" class.
     * @param {object} element The HTML element to handle.
     * @param {array} classes Array containing the class names. Can add/remove/toggle many classes seperated by a whitespace.
     */
    function handleClasses(action, element, classes) {
        classes.forEach(function (className) {
            is.element(element) && element.classList[action](className);
        });
    }

    return {
        addClass: function (className) {
            var classes = u.trim(className).split(' ');
            iterate(this, function (el) {
                handleClasses('add', el, classes);
            });
            return this;
        },
        removeClass: function (className) {
            var classes = u.trim(className).split(' ');
            iterate(this, function (el) {
                handleClasses('remove', el, classes);
            });
            return this;
        },
        toggleClass: function (className, state) {
            var classes = u.trim(className).split(' ');
            iterate(this, function (el) {
                switch (state) {
                    case null || undefined:
                        handleClasses('toggle', el, classes);
                        break;
                    case true:
                        handleClasses('add', el, classes);
                        break;
                    case false:
                        handleClasses('remove', el, classes);
                        break;
                }
            });
            return this;
        },
        hasClass: function (className) {
            var i = 0,
                len = this.length;

            for (i; i < len; i += 1) {
                if (this[i].classList.contains(className)) {
                    return true;
                }
            }
            return false;
        }
    };
}());
