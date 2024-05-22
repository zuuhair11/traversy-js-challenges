function factorial(num) {
    // When it's 0 or 1 return 1
    // if(num < 2)
    if(num === 0 || num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

module.exports = factorial;



// - 0! = 1
// - 1! = 1
// - 2! = 2 * 1 = 2
// - 3! = 3 * 2 * 1 = 6
// - 4! = 4 * 3 * 2  * 1 = 24
// - 5! = 5 * 4 * 3 * 2 * 1 = 120
