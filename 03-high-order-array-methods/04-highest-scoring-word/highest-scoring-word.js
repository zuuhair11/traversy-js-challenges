function highestScoringWord(str) {
    // Initialize an object with all properties i need.
    const output = { highestScore: 0, highestWord: '' };

    // Split the input string into an array of words
    const words = str.split(' ');

    words.forEach( word => {
        // Using the spread operator that unpack an array into separate values
        // Remember strings also are Iterables, that's why I can apply
        // I can use Array.from() instead if I want
        const score = [...word]
            .reduce( (score, letter) => {
                return score + letter.charCodeAt(0) - 96;
            }, 0);

        if(score > output.highestScore) {
            output.highestScore = score;
            output.highestWord = word;
        }
    });

    return output.highestWord;
}

module.exports = highestScoringWord;



/*
    1) Understanding the problem
    - Given a string of words, find the highest scoring word

    2) Break it into sub-problem
    - Function gonna take an array of words.
    - Loop through the words
    - For each iteration, save the score of the word
    - If current score more than the previous, update the object
    - Object gonna holds two {properties: score: 0, word: '}
*/
