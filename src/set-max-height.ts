import {getHeight} from './get-height';

export const setMaxHeight = (el: HTMLElement, height?: number): void => {
    el.style.maxHeight = (height === undefined ? getHeight(el) : height) + 'px';
};
