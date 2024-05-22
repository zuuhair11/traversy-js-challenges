function power(base, exponent) {
    // Your code here
    if(exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

module.exports = power;



/*  1) Understanding the problem
    - Write a function that takes in a base and exponent and return:
    - The result of raising the base to the power of the exponent

    2) Break it into sub-problem
    - The base will multiply by itself times the number of exponent
    - (2, 3) => 2 * 2 * 2
    
    - Now recursion needs to hit a base case to starts unwinding
    - The base case going to be the exponent
*/
