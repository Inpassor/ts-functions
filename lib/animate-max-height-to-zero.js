import { getHeight } from './get-height';
import { setMaxHeight } from './set-max-height';
export var animateMaxHeightToZero = function (el, timeout) {
    return new Promise(function (resolve) {
        var height = getHeight(el);
        var step = height / timeout, t = setInterval(function () {
            if (height + step >= 0) {
                height -= step;
                setMaxHeight(el, height);
            }
            else {
                clearInterval(t);
                setMaxHeight(el, 0);
                resolve();
            }
        }, 1);
    });
};
//# sourceMappingURL=animate-max-height-to-zero.js.map