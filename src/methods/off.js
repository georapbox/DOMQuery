module.exports = (function () {
    'use strict';

    // Require dependencies
    var u = require('utils/index'),
        iterate = u.iterator;

    /**
     * Remove an event listener previously registered with .on().
     * @param {string} eventName A string representing the event type to remove.
     * @param {function} listener The EventListener function to remove from the event target.
     * @param {boolean} [useCapture] Specifies whether the EventListener to be removed was registered as a capturing listener or not. If this parameter is absent, a default value of false is assumed.
     * return {object} The DOMQuery object
     */
    return function off(eventName, listener, useCapture) {
        iterate(this, function (el) {
            el.removeEventListener(eventName, listener, useCapture || false);
        });
        return this;
    };
}());
