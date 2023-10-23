function titleCase(sentence) {
    // First attempt
    const capSentence = sentence.split(' ')
        .map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    return capSentence;


    // Second attempt
    const words = [];
    let word = '';

    for(let i = 0; i < sentence.length; i++) {
        // Check if the next iteration, there's a space
        // If so push the word, with the first letter cap and the other lower
        if(sentence[i + 1] === ' ' || sentence[i + 1] === undefined) {
            words.push((word + sentence[i]).charAt(0).toUpperCase() + (word + sentence[i]).slice(1).toLocaleLowerCase());
            word = '';
            i++;

        // If there's no space, that means the word did not finished yet.
            word += sentence[i];
        }
    }

    // return words.join(' ');
}

module.exports = titleCase;



/*  1) Understanding the problem
    - Capitalize each word from a sentence
    - Each word consists only letters and spaces


    2) Break it into sub-problem
    - Split the sentence into an array
    - Use split method to seperate each word
    - Capitalize the first letter for each word
    - Convert the array back as a sentence
*/