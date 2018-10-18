export const toString = (params, encode = true, pairDivider = '&', divider = '=', callback = null) => {
    const result = [];
    for (const paramName in params) {
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