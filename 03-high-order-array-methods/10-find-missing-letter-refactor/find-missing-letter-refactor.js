function findMissingLetter(arr) {
    let start = arr.at(0).charCodeAt(0);

    const missingCharCode = arr.reduce(function(missing, char) {
        const current = char.charCodeAt(0);

        if(current - start > 1 && missing === null) {
            missing = start + 1;
        }

        start = current;
        return missing;

    }, null);

    return missingCharCode ? String.fromCharCode(missingCharCode) : '';
}

module.exports = findMissingLetter;



/*
    1) Understanding the problem
    - Returns the missing letter from an increasing letters array

    2) Break it into sub-problem
    - The function will receive an array of letters increasingly
    - The first letter of the array gonna be the starter number
    - That starter code number gonna store in separate variable
    - For each iteration we are gonna check:
    - If the current code - starter > 1 and there's no missing yet
    -       Set the missing to the starter + 1, instead of null
    -       This gonna be the the missing character code

    - Set the starter code to the current code, for the next check
    - And return the the missing character code every time
*/
