export var mapParams = function (paramsMap, params) {
    var result = {};
    for (var attributeName in params) {
        if (params.hasOwnProperty(attributeName)) {
            var attributeOptions = paramsMap[attributeName] || null;
            if (attributeOptions) {
                var value = params[attributeName];
                result[attributeOptions.name || attributeName] = attributeOptions.format ? attributeOptions.format(value) : value;
            }
        }
    }
    return result;
};
//# sourceMappingURL=map-params.js.map