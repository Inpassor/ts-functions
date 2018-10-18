export const trim = (str, _charlist = null) => {
    const charlist = !_charlist ?
        ' \s\xA0'
        : _charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    return str.replace(new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g'), '');
};
//# sourceMappingURL=trim.js.map