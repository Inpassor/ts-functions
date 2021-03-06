"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForTransitionEnd = (el, transition) => {
    if (el instanceof HTMLElement) {
        return new Promise(resolve => {
            const listener = (event) => {
                if (!transition || event.propertyName === transition) {
                    el.removeEventListener('transitionend', listener);
                    resolve();
                }
            };
            el.addEventListener('transitionend', listener);
        });
    }
    else {
        return Promise.all(el.map((e) => exports.waitForTransitionEnd(e, transition)));
    }
};
//# sourceMappingURL=wait-for-transition-end.js.map