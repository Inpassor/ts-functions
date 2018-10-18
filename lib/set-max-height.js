import { getHeight } from './get-height';
export const setMaxHeight = (el, height) => {
    el.style.maxHeight = (height === undefined ? getHeight(el) : height) + 'px';
};
//# sourceMappingURL=set-max-height.js.map