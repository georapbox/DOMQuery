module.exports = (function (win, doc, undefined) {
    'use strict';

    // Require dependencies
    var pkg = require('package.json'),
        u = require('utils/index'),
        is = u.is;

    // DOMQuery returns new Library object that hold our selector. Ex: Q('.wrapper')
    var DOMQuery = function (params) {
        return new Core(params);
    };

    var Core = function (params) {
        var invalidParams = is.string(params) &&
            (!params || u.trim(params) === '' || u.trim(params) === '#' || u.trim(params) === '.') ||
            is.nullOrUndefined(params);

        if (invalidParams) {
            return this;
        }

        var selector,
            i = 0,
            len;

        switch (true) {
            // Selector is a string
            case is.string(params):
                selector = doc.querySelectorAll(params);
                this.length = selector.length;
                this.selector = params;
                break;
            // Selector is a Nodelist
            case is.not.string(params) && params.length !== undefined && is.not.array(params):
                selector = params;
                this.length = params.length;
                break;
            // Selector is an HTML element
            case is.not.string(params) && is.nullOrUndefined(params.length) && (is.element(params) || is.documentNode(params)):
                if (is.not.nullOrUndefined(params)) {
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
