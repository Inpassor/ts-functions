import {setTyping} from './set-typing';

export const setTypings = (obj?: Object): Object => {
    const result = {};
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            result[i] = setTyping(obj[i]);
        }
    }
    return result;
};
