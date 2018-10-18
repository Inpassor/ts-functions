import { getHeight } from './get-height';
import { setMaxHeight } from './set-max-height';
export const animateMaxHeightToZero = (el, timeout) => {
    return new Promise(resolve => {
        let height = getHeight(el);
        const step = height / timeout, t = setInterval(() => {
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