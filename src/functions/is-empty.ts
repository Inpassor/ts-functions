export const isEmpty = (o: any): boolean => {
    if (!o) {
        return true;
    }
    if (typeof o === 'object') {
        return !Object.keys(o).length;
    }
    return !o;
};
