module.exports = function (str) {
    'use strict';

    var frag = document.createDocumentFragment(),
        elem = document.createElement('div');

    elem.innerHTML = str;

    while (elem.childNodes[0]) {
        frag.appendChild(elem.childNodes[0]);
    }

    return frag;
};
