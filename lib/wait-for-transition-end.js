export var waitForTransitionEnd = function (el, transition) {
    if (el instanceof HTMLElement) {
        return new Promise(function (resolve) {
            var listener = function (event) {
                if (!transition || event.propertyName === transition) {
                    el.removeEventListener('transitionend', listener);
                    resolve();
                }
            };
            el.addEventListener('transitionend', listener);
        });
    }
    else {
        return Promise.all(el.map(function (e) { return waitForTransitionEnd(e, transition); }));
    }
};
//# sourceMappingURL=wait-for-transition-end.js.map