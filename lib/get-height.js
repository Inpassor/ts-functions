"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeight = (el) => {
    const style = getComputedStyle(el);
    return parseFloat(style['marginTop'])
        + parseFloat(style['marginBottom'])
        + el.offsetHeight;
};
//# sourceMappingURL=get-height.js.map