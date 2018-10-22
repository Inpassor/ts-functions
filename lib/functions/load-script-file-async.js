"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScriptFileAsync = (src) => {
    if (document) {
        let isExist = false;
        const scripts = document.getElementsByTagName('script');
        for (let i = 0, l = scripts.length; i < l; i++) {
            const script = scripts[i];
            if (script.src.indexOf(src) !== -1) {
                isExist = true;
            }
        }
        if (!isExist) {
            const n = scripts[0], s = document.createElement('script'), f = () => {
                n.parentNode.insertBefore(s, n);
            };
            s.type = 'text/javascript';
            s.async = true;
            s.src = src;
            if (global['opera'] === '[object Opera]') {
                document.addEventListener('DOMContentLoaded', f, false);
            }
            else {
                f();
            }
        }
    }
};
//# sourceMappingURL=load-script-file-async.js.map