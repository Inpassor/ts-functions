import { getClassName } from './get-class-name';
export var call = function (functionName, thisArg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var _a;
    var errorFn = function (_context) {
        throw new Error("Method \"" + getClassName(_context) + "." + functionName + "\" not found");
    };
    var namespaces = functionName.split('.');
    var methodName = namespaces.pop();
    var context = thisArg;
    if (namespaces.length) {
        for (var _b = 0, namespaces_1 = namespaces; _b < namespaces_1.length; _b++) {
            var namespace = namespaces_1[_b];
            if (!context[namespace]) {
                errorFn(context);
            }
            context = context[namespace];
        }
    }
    if (!context[methodName]) {
        errorFn(context);
    }
    return (_a = context[methodName]).call.apply(_a, [context].concat(args));
};
//# sourceMappingURL=call.js.map