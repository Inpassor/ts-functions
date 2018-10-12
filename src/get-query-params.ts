import {setTypings} from './set-typings';

export const getQueryParams = (_href?: string): { [key: string]: any } => {
    let href: string;
    if (!_href) {
        const iframe = <HTMLIFrameElement> window.frameElement;
        if (iframe) {
            href = iframe.src;
        } else {
            if (!document || !document.location) {
                return {};
            }
            href = document.location.href;
        }
    } else {
        href = _href;
    }
    const result = {};
    const position = href.indexOf('?');
    const hrefParts = href.substr(position + 1).split('&');
    for (const hrefPart of hrefParts) {
        const parts = hrefPart.split('=');
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]) || null;
    }
    return setTypings(result);
};
