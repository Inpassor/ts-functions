export var getClassName = function (context) {
    if (context.name) {
        return context.name;
    }
    var results = /function (.{1,})\(/.exec(context.constructor.toString());
    return (results && results.length > 1) ? results[1] : '';
};
//# sourceMappingURL=get-class-name.js.map