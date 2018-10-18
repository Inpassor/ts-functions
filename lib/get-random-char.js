export var getRandomChar = function () {
    var min = 0;
    var max = 62;
    var r = (Math.random() * (max - min) + min);
    return String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
};
//# sourceMappingURL=get-random-char.js.map