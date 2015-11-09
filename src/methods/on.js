module.exports = (function () {
    'use strict';

    // Require dependencies
    var iterate = require('_iterator');

    /**
     * Attach an event handler function for one event to the mathed elements.
     * @param {string} eventName A string representing the event type to listen for.
     * @param {function} listener A function to execute when the event is triggered.
     * @param {boolean} [useCapture] If true, useCapture indicates that the user wishes to initiate capture. If this parameter is absent, a default value of false is assumed.
     */
    return function on(eventName, listener, useCapture ) {
        iterate(this, function (el) {
            el.addEventListener(eventName, listener, useCapture || false);
        });
        return this;
    };
}());
