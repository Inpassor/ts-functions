export const getProperty = (object: any, propertyName: string, properties?: any): any => {
    if (properties && properties.hasOwnProperty(propertyName)) {
        return properties[propertyName];
    }
    if (object.hasOwnProperty(propertyName)) {
        return object[propertyName];
    }
    return null;
};
