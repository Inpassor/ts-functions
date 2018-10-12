export const toFloat = (value: any): number => {
    return value ? parseFloat((value + '')
        .replace(/[^0-9+\-Ee.]/g, '')
        .replace(/,/g, '.')
        .replace(/ /g, '')
    ) : 0;
};
