function validAnagrams(str1, str2) {
    const freqCount1 = str1
        .split('')
        .reduce( (acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;  
        }, {});
    
    const freqCount2 = str2
        .split('')
        .reduce( (acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});


    return Object.keys(freqCount1)
        .every( char => {
            return freqCount1[char] === freqCount2[char]
        });
}

module.exports = validAnagrams;



/*
    1) Understanding the problem
    - Check the two strings and determines whether they are valid anagrams

    2) Break it into sub-problem
    - Function gonna receive two paramaters
    - First, split the two strings into arrays of character
    - Use reduce, and convert the array into an object
    - For each iteration count the character frequency
    - Then compare the keys' value if they are equales using every()
*/
