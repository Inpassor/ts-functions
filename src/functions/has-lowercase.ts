export const hasLowercase = (s: string): boolean => {
    return /[a-zа-я]/.test(s);
};
