export var waitFor = function (options) {
    return new Promise(function (resolve, reject) {
        var iterationsInterval = options.iterationsInterval || 10;
        var maxIterations = options.maxIterations || 10000;
        var requiredValue = options.requiredValue;
        var iterations = 0;
        var t = setInterval(function () {
            var value = options.context[options.prop];
            if (requiredValue === undefined ? value : requiredValue === value) {
                clearInterval(t);
                resolve();
            }
            else {
                iterations++;
                if (iterations > maxIterations) {
                    clearInterval(t);
                    reject("Max iterations of " + maxIterations + " exceed");
                }
            }
        }, iterationsInterval);
    });
};
//# sourceMappingURL=wait-for.js.map