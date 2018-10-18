"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerEvent = (element, eventType) => {
    const el = element;
    if (el.dispatchEvent && document) {
        const event = document.createEvent('MouseEvent');
        event.initMouseEvent(eventType, true, true, window || null, 0, 0, 0, 0, 0, true, true, true, null, 1, null);
        setTimeout(() => {
            el.dispatchEvent(event);
        }, 0);
    }
};
//# sourceMappingURL=trigger-event.js.map