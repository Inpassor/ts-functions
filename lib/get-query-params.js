import { setTypings } from './set-typings';
export var getQueryParams = function (_href) {
    var href;
    if (!_href) {
        var iframe = window.frameElement;
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
    var result = {};
    var position = href.indexOf('?');
    var hrefParts = href.substr(position + 1).split('&');
    for (var _i = 0, hrefParts_1 = hrefParts; _i < hrefParts_1.length; _i++) {
        var hrefPart = hrefParts_1[_i];
        var parts = hrefPart.split('=');
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]) || null;
    }
    return setTypings(result);
};
//# sourceMappingURL=get-query-params.js.map