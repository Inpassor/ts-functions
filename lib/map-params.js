export const mapParams = (paramsMap, params) => {
    const result = {};
    for (const attributeName in params) {
        if (params.hasOwnProperty(attributeName)) {
            const attributeOptions = paramsMap[attributeName] || null;
            if (attributeOptions) {
                const value = params[attributeName];
                result[attributeOptions.name || attributeName] = attributeOptions.format ? attributeOptions.format(value) : value;
            }
        }
    }
    return result;
};
//# sourceMappingURL=map-params.js.map