"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_typing_1 = require("./set-typing");
exports.setTypings = (data) => {
    const result = {};
    for (const i in data) {
        if (data.hasOwnProperty(i)) {
            result[i] = set_typing_1.setTyping(data[i]);
        }
    }
    return result;
};
//# sourceMappingURL=set-typings.js.map