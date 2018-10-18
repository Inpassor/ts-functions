export var getProperty = function (object, propertyName, properties) {
    if (properties && properties.hasOwnProperty(propertyName)) {
        return properties[propertyName];
    }
    if (object.hasOwnProperty(propertyName)) {
        return object[propertyName];
    }
    return null;
};
//# sourceMappingURL=get-property.js.map