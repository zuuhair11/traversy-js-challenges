function permutations(str) {
    const result = [];

    if(str.length === 0) {
        result.push('');
        return result;
    }

    for(let i = 0; i < str.length; i++) {
        const firstChar = str[i];
        const restOfString = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = permutations(restOfString);

        for(let j = 0; j < subPermutations.length; j++) {
            result.push(firstChar + subPermutations[j]);
        }
    }

    return result;
}

module.exports = permutations;



/*  1) Understanding the problem
    - Take a string and return an array of all possible permutations of it
    - 'abc' => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

    2) Break it into sub-problem
    - Make the first left permutations and for the right just take it in reverse
    - We can loop through the characters, and for each character we can:
    - We can use it whenever we call the function with string sliced
*/
