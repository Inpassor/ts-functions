"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFloat = (value) => {
    return value ? parseFloat((value + '')
        .replace(/[^0-9+\-Ee.]/g, '')
        .replace(/,/g, '.')
        .replace(/ /g, '')) : 0;
};
//# sourceMappingURL=to-float.js.map