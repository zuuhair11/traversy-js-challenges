function calculator(num1, num2, operator) {
    // First attempt
    // List all valid operator
    const validOperator = ['+', '-', '*', '/', '%'];

    // Check first if the operator is actually valid
    if(validOperator.includes(operator)) {
        // The browser yalled at me because using eval() it's unsafe
        // Error related to Content Security Policy (CSP) 
        // Restrictions in Browser
        if(typeof num1 === 'number' && typeof num2 === 'number') {
            return eval(num1 + operator + num2);
        }
        
    } else {
        throw new Error('Invalid operator');
    }


    // Second attempt
    // Omitting the break is a common practice when using switch with return
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        
        default:
            throw new Error('Invalid operator');
    }
}

module.exports = calculator;



/*
    1) Understanding the problem
    - Calculate two number with a given operator
    - Throw an error if the operator invalid


    2) Break it into sub-problem
    - Check if num1 and num2 are valid numbers
    - Check if the operator is valid
    - Valid operator ['+' '-' '*' '/' '%']
    - Return must be number
*/