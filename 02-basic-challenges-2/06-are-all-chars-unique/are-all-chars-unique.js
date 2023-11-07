function areAllCharactersUnique(str) {
    const chacacters = [str.charAt(0)];

    for(let i = 1; i < str.length; i++) {
        if(chacacters.includes(str[i])) {
            return false;
        }

        chacacters.push(str[i]);
    }

    return true;
}

module.exports = areAllCharactersUnique;



/*
    1) Understanding the problem
    - check the string chacacters if they're not repeated

    2) Break it into sub-problem
    - the input is a string
    - 'a' and 'A' are considered different characters
    - empty space should return true by default
*/
