"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_height_1 = require("./get-height");
exports.setMaxHeight = (el, height) => {
    el.style.maxHeight = (height === undefined ? get_height_1.getHeight(el) : height) + 'px';
};
//# sourceMappingURL=set-max-height.js.map