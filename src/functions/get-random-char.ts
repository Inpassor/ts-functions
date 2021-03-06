export const getRandomChar = (): string => {
    const min = 0;
    const max = 62;
    let r = (Math.random() * (max - min) + min);
    return String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
};
