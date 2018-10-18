export var loadScriptFileAsync = function (src) {
    if (document) {
        var isExist = false;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0, l = scripts.length; i < l; i++) {
            var script = scripts[i];
            if (script.src.indexOf(src) !== -1) {
                isExist = true;
            }
        }
        if (!isExist) {
            var n_1 = scripts[0], s_1 = document.createElement('script'), f = function () {
                n_1.parentNode.insertBefore(s_1, n_1);
            };
            s_1.type = 'text/javascript';
            s_1.async = true;
            s_1.src = src;
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