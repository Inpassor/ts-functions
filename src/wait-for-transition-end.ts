export const waitForTransitionEnd = (el: HTMLElement | HTMLElement[], transition?: string): Promise<any> => {
    if (el instanceof HTMLElement) {
        return new Promise(resolve => {
            const listener = (event: TransitionEvent) => {
                if (!transition || event.propertyName === transition) {
                    el.removeEventListener('transitionend', listener);
                    resolve();
                }
            };
            el.addEventListener('transitionend', listener);
        });
    } else {
        return Promise.all(el.map((e: HTMLElement) => waitForTransitionEnd(e, transition)));
    }
};
