export var triggerEvent = function (element, eventType) {
    var el = element;
    if (el.dispatchEvent && document) {
        var event_1 = document.createEvent('MouseEvent');
        event_1.initMouseEvent(eventType, true, true, window || null, 0, 0, 0, 0, 0, true, true, true, null, 1, null);
        setTimeout(function () {
            el.dispatchEvent(event_1);
        }, 0);
    }
};
//# sourceMappingURL=trigger-event.js.map