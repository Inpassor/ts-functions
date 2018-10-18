import { toFloat } from './to-float';
export var Formatters = {
    stringToBoolean: function (value) { return value === 'true'; },
    booleanToString: function (value) { return value ? 'true' : 'false'; },
    stringToNumber: toFloat,
    numberToString: function (value) { return value + ''; },
    numberToBoolean: function (value) { return value === 1; },
    booleanToNumber: function (value) { return value ? 1 : 0; },
    stringToDate: function (value) { return new Date(value); },
    dateToString: function (value) { return value.toLocaleString('en-US'); },
    dateToDateString: function (value) { return value.toLocaleDateString('en-US'); },
};
//# sourceMappingURL=formatters.js.map