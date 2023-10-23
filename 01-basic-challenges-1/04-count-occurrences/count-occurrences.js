function countOccurrences(str, character) {
    if(typeof str === 'string' && typeof character === 'string') {
        // First attempt
        // Destructuring the string into an array
        return [...str]
            .filter( letter => letter === character )
            .length;

        
        // Second attempt
        // Since splitting the string removes the character, 
        // the resulting array will have one less element than 
        // the number of occurrences of the character
        return str.split(character).length - 1;

        // Third attempt
        // Split the string into an array
        return str.split('')
            .filter( letter => letter === character )
            .length;


        // Fourth attempt
        let numOfOccurrences = 0;
    
        for(let i = 0; i < str.length; i++) {
            if(str[i] === character) numOfOccurrences++
        }
        return numOfOccurrences;

    } else {
        throw new Error('Invalid string');
    }
}

module.exports = countOccurrences;



/* 
    1) Understing the problem
    - Calculate the number of occurrences in a string
    - If not found return 0


    2) Break it into sub-problem
    - It has to be string
    - Lowercase and uppercase characters are different 
*/