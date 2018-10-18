import { isNumeric } from './is-numeric';
export const setTyping = (_value) => {
    let value;
    if (isNumeric(_value)) {
        value = parseFloat(_value);
    }
    else {
        switch (_value) {
            case 'true':
                value = true;
                break;
            case 'false':
                value = false;
                break;
            case 'null':
                value = null;
                break;
            case 'undefined':
                value = undefined;
                break;
        }
    }
    return value;
};
//# sourceMappingURL=set-typing.js.map