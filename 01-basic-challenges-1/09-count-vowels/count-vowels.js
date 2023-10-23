function countVowels(str) {
    // First attempt
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numOfVowels = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) numOfVowels++;
    }

    return numOfVowels;
}

module.exports = countVowels;



/*  1) Understanding the problem
    - Return the number of vowels in the string
    - Count also duplicated vowels

    2) Break it into sub-problem
    - Initialized a numOfVowels to 0
    - Loop through the string
    - Each iteration check if the character is a vowel
    - If so increment by 1
    - Else move on
*/
