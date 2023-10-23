function isPalindrome(str) {
    // First attempt
    // Remove any non-alphanumeric characters from the string.
    // To avoid spaces or punctuation, such as 'racecar' and 'race car'.
    const formattedStr1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = formattedStr1.split('').reverse().join('');

    return formattedStr1 === reversedStr;


    // Second attempt
    let formattedStr2 = '';
    for(let i = 0; i < str.length; i++) {
        if(/[a-zA-Z0-9]/.test(str[i])) {
            formattedStr2 += str[i].toLowerCase();
        }
    }
    
    return formattedStr2 === formattedStr2.split('').reverse().join('');
}

module.exports = isPalindrome;



/*  1) Understanding the problem
    - Check if the word, phrase, number is palindrome
    - Palindrome: reads the same, backwards or forwards
    - Example: madam
    - [m, a, d, a, m] = [m, a, d, a, m].reverse()


    2) Break it into sub-problem
    - The input string will only contain lowercase letters and spaces
    - The function should ignore any space
    
    - Example: madam
    - Loop through the string 
    - If there's any letter or space I am gonna return it
    - Else move on to the next character
    - Reverse the result
    - Check if it's equal with the original one
*/
