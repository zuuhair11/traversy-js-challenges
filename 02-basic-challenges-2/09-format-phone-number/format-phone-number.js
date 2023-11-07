function formatPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const prefix = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6).join('');

    return `(${ areaCode }) ${ prefix }-${ lineNumber }`;
}

module.exports = formatPhoneNumber;



/*
    1) Understanding the problem
    - Return the number with a specified format

    2) Break it into sub-problem
    - Input gonna be an array of numbers from 0 to 9
    - The length of the array always gonna be 10 numbers
*/
