module.exports = (function () {
    'use strict';

    // Require dependencies
    var iterate = require('_iterator');

    /**
     * @private
     * @param {string} action The action to be taken. Eg "add", "remove" or "toggle" class.
     * @param {object} element The HTML element to handle.
     * @param {array} classes Array containing the class names. Can add/remove/toggle many classes seperated by a whitespace.
     */
    function handleClasses(action, element, classes) {
        classes.forEach(function (className) {
            element.nodeType === 1 && element.classList[action](className);
        });
    }

    return {
        addClass: function (className) {
            var classes = className.split(' ');
            iterate(this, function (el) {
                handleClasses('add', el, classes);
            });
            return this;
        },
        removeClass: function (className) {
            var classes = className.split(' ');
            iterate(this, function (el) {
                handleClasses('remove', el, classes);
            });
            return this;
        },
        toggleClass: function (className) {
            var classes = className.split(' ');
            iterate(this, function (el) {
                handleClasses('toggle', el, classes);
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