function reverseString(str) {
    // First attempt
    const reversedArray = [];

    for(let i = 0; i < str.length; i++) {
        reversedArray.unshift(str[i]);
    }

    return reversedArray.join('');


    // Second attempt
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;


    // Second attempt
    return str.split('').reverse().join('');
}

module.exports = reverseString;



/*  1) Understanding the problem
    - Reverse a any string you recieve
    - Example: hello => olleh


    2) Break it into sub-problems
    - Assign an empty global array
    - Loop through the string
    - For each iteration unshift the first letter to the array
    - Hey => yeH
*/
