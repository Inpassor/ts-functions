export var toString = function (params, encode, pairDivider, divider, callback) {
    if (encode === void 0) { encode = true; }
    if (pairDivider === void 0) { pairDivider = '&'; }
    if (divider === void 0) { divider = '='; }
    if (callback === void 0) { callback = null; }
    var result = [];
    for (var paramName in params) {
        if (params.hasOwnProperty(paramName)) {
            if (callback) {
                params[paramName] = callback(paramName, params[paramName]);
            }
            result.push((encode ? encodeURIComponent(paramName) : paramName)
                + ((params[paramName] !== null && params[paramName] !== undefined) ? divider
                    + (encode ? encodeURIComponent(params[paramName]) : params[paramName]) : ''));
        }
    }
    return result.join(pairDivider);
};
//# sourceMappingURL=to-string.js.map