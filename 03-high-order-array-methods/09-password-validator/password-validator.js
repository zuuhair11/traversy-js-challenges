function validatePassword(password) {
    const isLengthValid = password.length >= 8;

    const hasUpperCase = password
        .split('')
        .some( char => char === char.toUpperCase() && char !== char.toLowerCase());
    
    const hasLowerCase = password
        .split('')
        .some( char => char === char.toLowerCase() && char !== char.toUpperCase())
    
    const hasDigit = password
        .split('')
        .some( char => !isNaN(parseInt(char)));
    
    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;



/*
    1) Understanding the problem
    - Check if the password is valid or not, based on some criteria

    2) Break it into sub-problems
    - For the password to be valid it has to be:
    - At least 8 characters long
    - Contain at least one uppercase letter
    - Contain at least one lowercase letter
    - Contain at least one digit
    - If the password match all these then return true
    - Else return false
*/