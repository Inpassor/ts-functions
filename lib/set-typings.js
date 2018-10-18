import { setTyping } from './set-typing';
export var setTypings = function (obj) {
    var result = {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result[i] = setTyping(obj[i]);
        }
    }
    return result;
};
//# sourceMappingURL=set-typings.js.map