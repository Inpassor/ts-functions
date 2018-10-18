export var getHeight = function (el) {
    var style = getComputedStyle(el);
    return parseFloat(style['marginTop'])
        + parseFloat(style['marginBottom'])
        + el.offsetHeight;
};
//# sourceMappingURL=get-height.js.map