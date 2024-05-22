function fibonacci(num) {
    // Base case, starts unwinding
    if(num < 2) {
        return num;
    }

    // Recursive case
    return fibonacci(num - 1) + fibonacci(num - 2);


    // Short way
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;



// The febonacci Sequence starts with 0 and 1
// 0 1 1 2 3 5 8 13 21 34 55 89....
