export const getHeight = (el: HTMLElement): number => {
    const style = getComputedStyle(el);
    return parseFloat(style['marginTop'])
        + parseFloat(style['marginBottom'])
        + el.offsetHeight;
};
