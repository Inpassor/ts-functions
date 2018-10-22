import {Data} from '../interfaces';

export const mapParams = (paramsMap: Data, params: Data): Data => {
    const result: Data = {};
    for (const attributeName in params) {
        if (params.hasOwnProperty(attributeName)) {
            const attributeOptions = paramsMap[attributeName] || null;
            if (attributeOptions) {
                const value = params[attributeName];
                result[attributeOptions.name || attributeName] = attributeOptions.format ?
                    attributeOptions.format(value, paramsMap, params)
                    : value;
            }
        }
    }
    return result;
};
