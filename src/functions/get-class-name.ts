export const getClassName = (context: any): string => {
    if (context.name) {
        return context.name;
    }
    const results = /function (.{1,})\(/.exec(context.constructor.toString());
    return (results && results.length > 1) ? results[1] : '';
};
