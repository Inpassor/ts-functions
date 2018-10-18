import { getHeight } from './get-height';
export var setMaxHeight = function (el, height) {
    el.style.maxHeight = (height === undefined ? getHeight(el) : height) + 'px';
};
//# sourceMappingURL=set-max-height.js.map