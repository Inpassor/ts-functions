import { toFloat } from './to-float';
export const Formatters = {
    stringToBoolean: (value) => value === 'true',
    booleanToString: (value) => value ? 'true' : 'false',
    stringToNumber: toFloat,
    numberToString: (value) => value + '',
    numberToBoolean: (value) => value === 1,
    booleanToNumber: (value) => value ? 1 : 0,
    stringToDate: (value) => new Date(value),
    dateToString: (value) => value.toLocaleString('en-US'),
    dateToDateString: (value) => value.toLocaleDateString('en-US'),
};
//# sourceMappingURL=formatters.js.map