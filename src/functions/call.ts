import {getClassName} from './get-class-name';

export const call = (functionName: string, thisArg: any, ...args: any[]): any => {
    const errorFn = (_context: any) => {
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
    return (<Function>context[methodName]).call(context, ...args);
};
