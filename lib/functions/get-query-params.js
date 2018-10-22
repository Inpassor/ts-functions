"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_typings_1 = require("./set-typings");
exports.getQueryParams = (_href) => {
    let href;
    if (!_href) {
        const iframe = window.frameElement;
        if (iframe) {
            href = iframe.src;
        }
        else {
            if (!document || !document.location) {
                return {};
            }
            href = document.location.href;
        }
    }
    else {
        href = _href;
    }
    const result = {};
    const position = href.indexOf('?');
    const hrefParts = href.substr(position + 1).split('&');
    for (const hrefPart of hrefParts) {
        const parts = hrefPart.split('=');
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]) || null;
    }
    return set_typings_1.setTypings(result);
};
//# sourceMappingURL=get-query-params.js.map