import {WaitForOptions} from '../interfaces';

export const waitFor = (options: WaitForOptions | string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const _options: WaitForOptions = typeof options === 'string' ? {
            prop: options,
        } : options;
        const context = _options.context || window;
        const iterationsInterval = _options.iterationsInterval || 10;
        const maxIterations = _options.maxIterations || 10000;
        const requiredValue = _options.requiredValue;
        let iterations = 0;
        const t = setInterval(() => {
            const value = context[_options.prop];
            if (requiredValue === undefined ? value : requiredValue === value) {
                clearInterval(t);
                resolve(value);
            } else {
                iterations++;
                if (iterations > maxIterations) {
                    clearInterval(t);
                    reject(`Max iterations of ${maxIterations} exceed`);
                }
            }
        }, iterationsInterval);
    });
};
