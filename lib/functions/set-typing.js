"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_numeric_1 = require("./is-numeric");
exports.setTyping = (_value) => {
    let value = _value;
    if (is_numeric_1.isNumeric(_value)) {
        value = parseFloat(_value);
    }
    else {
        switch (_value) {
            case 'true':
                value = true;
                break;
            case 'false':
                value = false;
                break;
            case 'null':
                value = null;
                break;
            case 'undefined':
                value = undefined;
                break;
        }
    }
    return value;
};
//# sourceMappingURL=set-typing.js.map