export const toString = (
    params: { [param: string]: any },
    encode = true,
    pairDivider = '&',
    divider = '=',
    callback: (key: string, value: any) => any = null
): string => {
    const result = [];
    for (const paramName in params) {
        if (params.hasOwnProperty(paramName)) {
            if (callback) {
                params[paramName] = callback(paramName, params[paramName]);
            }
            result.push(
                (encode ? encodeURIComponent(paramName) : paramName)
                + ((params[paramName] !== null && params[paramName] !== undefined) ? divider
                + (encode ? encodeURIComponent(params[paramName]) : params[paramName]) : '')
            );
        }
    }
    return result.join(pairDivider);
};
