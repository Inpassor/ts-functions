import {Data} from '../interfaces';
import {setTyping} from './set-typing';

export const setTypings = (data?: Data): Data => {
    const result = {};
    for (const i in data) {
        if (data.hasOwnProperty(i)) {
            result[i] = setTyping(data[i]);
        }
    }
    return result;
};
