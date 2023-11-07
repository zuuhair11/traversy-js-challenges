function findFirstNonRepeatingCharacter(str) {
    const charCount = {};

    for(const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for(const char of str) {
        if(charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;



/*
    1) Understanding the problem
    - Return the first non-repeating character in the string

    2) Break it into sub-problem
    - Function will take a string
    - Return only the first character that doesn't repeated
    - If there's none, return null
*/
