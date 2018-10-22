"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_height_1 = require("./get-height");
const set_max_height_1 = require("./set-max-height");
exports.animateMaxHeightToZero = (el, timeout) => {
    return new Promise(resolve => {
        let height = get_height_1.getHeight(el);
        const step = height / timeout, t = setInterval(() => {
            if (height + step >= 0) {
                height -= step;
                set_max_height_1.setMaxHeight(el, height);
            }
            else {
                clearInterval(t);
                set_max_height_1.setMaxHeight(el, 0);
                resolve();
            }
        }, 1);
    });
};
//# sourceMappingURL=animate-max-height-to-zero.js.map