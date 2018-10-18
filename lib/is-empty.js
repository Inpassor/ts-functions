"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = (o) => {
    if (!o) {
        return true;
    }
    if (typeof o === 'object') {
        return !Object.keys(o).length;
    }
    return !o;
};
//# sourceMappingURL=is-empty.js.map