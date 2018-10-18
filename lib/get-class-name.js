export const getClassName = (context) => {
    if (context.name) {
        return context.name;
    }
    const results = /function (.{1,})\(/.exec(context.constructor.toString());
    return (results && results.length > 1) ? results[1] : '';
};
//# sourceMappingURL=get-class-name.js.map