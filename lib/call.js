import { getClassName } from './get-class-name';
export const call = (functionName, thisArg, ...args) => {
    const errorFn = (_context) => {
        throw new Error(`Method "${getClassName(_context)}.${functionName}" not found`);
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