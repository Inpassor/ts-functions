"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFor = (options) => {
    return new Promise((resolve, reject) => {
        const _options = typeof options === 'string' ? {
            prop: options,
        } : options;
        const context = _options.context || window;
        const iterationsInterval = _options.iterationsInterval || 10;
        const maxIterations = _options.maxIterations || 10000;
        const requiredValue = _options.requiredValue;
        let iterations = 0;
        const t = setInterval(() => {
            const value = _options.context[_options.prop];
            if (requiredValue === undefined ? value : requiredValue === value) {
                clearInterval(t);
                resolve(value);
            }
            else {
                iterations++;
                if (iterations > maxIterations) {
                    clearInterval(t);
                    reject(`Max iterations of ${maxIterations} exceed`);
                }
            }
        }, iterationsInterval);
    });
};
//# sourceMappingURL=wait-for.js.map