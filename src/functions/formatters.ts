import {toFloat} from './to-float';

export const Formatters = {
    stringToBoolean: (value: string): boolean => value === 'true',
    booleanToString: (value: boolean): string => value ? 'true' : 'false',
    stringToNumber: toFloat,
    numberToString: (value: number): string => value + '',
    numberToBoolean: (value: number): boolean => value === 1,
    booleanToNumber: (value: boolean): number => value ? 1 : 0,
    stringToDate: (value: string): Date => new Date(value),
    dateToString: (value: Date): string => value.toLocaleString('en-US'),
    dateToDateString: (value: Date): string => value.toLocaleDateString('en-US'),
};
