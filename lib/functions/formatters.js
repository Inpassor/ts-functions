"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_float_1 = require("./to-float");
exports.Formatters = {
    stringToBoolean: (value) => value === 'true',
    booleanToString: (value) => value ? 'true' : 'false',
    stringToNumber: to_float_1.toFloat,
    numberToString: (value) => value + '',
    numberToBoolean: (value) => value === 1,
    booleanToNumber: (value) => value ? 1 : 0,
    stringToDate: (value) => new Date(value),
    dateToString: (value) => value.toLocaleString('en-US'),
    dateToDateString: (value) => value.toLocaleDateString('en-US'),
};
//# sourceMappingURL=formatters.js.map