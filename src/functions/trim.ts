export const trim = (str: string, _charlist: string = null): string => {
    const charlist = !_charlist ?
        ' \s\xA0'
        : _charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    return str.replace(new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g'), '');
};
