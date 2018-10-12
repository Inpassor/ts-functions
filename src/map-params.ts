export const mapParams = (paramsMap: { [key: string]: any }, params: { [key: string]: any }): { [key: string]: any } => {
    const result: { [key: string]: any } = {};
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
