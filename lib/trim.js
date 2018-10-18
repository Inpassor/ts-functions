export var trim = function (str, _charlist) {
    if (_charlist === void 0) { _charlist = null; }
    var charlist = !_charlist ?
        ' \s\xA0'
        : _charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    return str.replace(new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g'), '');
};
//# sourceMappingURL=trim.js.map