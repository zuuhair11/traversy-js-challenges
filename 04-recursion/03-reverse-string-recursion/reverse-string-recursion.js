function reverseString(str) {
    // First attemp
    if(str === '') {
        return '';
    }

    return reverseString(str.substring(1)) + str.charAt(0);

    // Second attempt
    return str === '' ? '' : reverseString(str.substring(1)) + str.charAt(0);
}

module.exports = reverseString;
