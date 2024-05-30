const $ = function (query) {
    return document.querySelector(query);
};

const $$ = function (querys) {
    return document.querySelectorAll(querys);
};

Element.prototype.event = function (event , callback) {
    this.addEventListener(event , function () {
        callback();
    });
};

NodeList.prototype.events = function (event , callback) {
    this.forEach(element => {
        element.addEventListener(event , function () {
            callback();
        });
    });
};

Element.prototype.txt = function (newText) {
    this.innerHTML = newText;
};

Element.prototype.txts = function (newTexts) {
    this.innerHTML = `[${newTexts.join('|')}]`;
};

