function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(arr[0]);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }

    return '';
}

module.exports = findMissingLetter;




/*
    1) Understanding the problem
    - The function takes in an array of increasing letters
    - Return the missing letter 

    2) Break it into sub-problem
    - Input array will only contain letters in one case(lower or upper)
    - If there's no letter in the array, return an empty string
*/
