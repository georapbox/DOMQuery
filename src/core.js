module.exports = (function (win, doc, undefined) {
    'use strict';

    // Require dependencies
    var pkg = require('package.json'),
        u = require('utils/index');

    // DOMQuery returns new Library object that hold our selector. Ex: Q('.wrapper')
    var DOMQuery = function (params) {
        return new Core(params);
    };

    var Core = function (params) {
        var invalidParams = u.is.string(params) &&
            (!params || u.trim(params) === '' || u.trim(params) === '#' || u.trim(params) === '.') ||
            params == null // jshint ignore:line

        if (invalidParams) {
            return this;
        }

        var selector,
            i = 0,
            len;

        switch (true) {
            // Selector is a string
            case u.is.string(params):
                selector = doc.querySelectorAll(params);
                this.length = selector.length;
                this.selector = params;
                break;
            // Selector is a Nodelist
            case u.is.not.string(params) && params.length !== undefined && u.is.not.array(params):
                selector = params;
                this.length = params.length;
                break;
            // Selector is an HTML element
            case u.is.not.string(params) && params.length == null && u.is.element(params): // jshint ignore:line
                if (params != null) { // jshint ignore:line
                    selector = [params];
                    this.length = 1;
                }
                break;
        }

        for (i, len = this.length; i < len; i += 1) {
            this[i] = selector[i];
        }

        return this;
    };

    DOMQuery.fn = Core.prototype = {
        'DOMQuery': pkg.version
    };

    return DOMQuery;
}(window, document));
