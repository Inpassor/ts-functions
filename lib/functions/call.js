"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_class_name_1 = require("./get-class-name");
exports.call = (functionName, thisArg, ...args) => {
    const errorFn = (_context) => {
        throw new Error(`Method "${get_class_name_1.getClassName(_context)}.${functionName}" not found`);
    };
    const namespaces = functionName.split('.');
    const methodName = namespaces.pop();
    let context = thisArg;
    if (namespaces.length) {
        for (const namespace of namespaces) {
            if (!context[namespace]) {
                errorFn(context);
            }
            context = context[namespace];
        }
    }
    if (!context[methodName]) {
        errorFn(context);
    }
    return context[methodName].call(context, ...args);
};
//# sourceMappingURL=call.js.map