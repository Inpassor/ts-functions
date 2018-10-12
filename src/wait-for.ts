export interface WaitForOptions {
    context: any;
    prop: any;
    requiredValue?: any;
    iterationsInterval?: number;
    maxIterations?: number;
}

export const waitFor = (options: WaitForOptions): Promise<null> => {
    return new Promise((resolve, reject) => {
        const iterationsInterval = options.iterationsInterval || 10;
        const maxIterations = options.maxIterations || 10000;
        const requiredValue = options.requiredValue;
        let iterations = 0;
        const t = setInterval(() => {
            const value = options.context[options.prop];
            if (requiredValue === undefined ? value : requiredValue === value) {
                clearInterval(t);
                resolve();
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
