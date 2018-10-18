"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_typing_1 = require("./set-typing");
exports.setTypings = (obj) => {
    const result = {};
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            result[i] = set_typing_1.setTyping(obj[i]);
        }
    }
    return result;
};
//# sourceMappingURL=set-typings.js.map