function fizzBuzzArray(num) {
    if(typeof num === 'number' && num > 0) {
        const output = [];

        for(let i = 1; i <= num; i++) {
            if(i % 3 === 0 && i % 5 === 0 ) {
                output.push('FizzBuzz'); 
    
            } else if(i % 3 === 0) {
                output.push('Fizz');
    
            } else if(i % 5 === 0) {
                output.push('Buzz');
    
            } else {
                output.push(i);
            }
        }

        return output;
    } else {
        return new Error('That is not valid');
    }
}

module.exports = fizzBuzzArray;


/*
    1) Understanding the problem
    - Loop through the numbers and for each iteration:
    - If number is divisible by 3 => "Fizz" 
    - If number is divisible by 5 => "Buzz"
    - If number is divisible by 3 and 5 => "FizzBuzz"

    2) Break it into sub-problem
    - Takes in a number and returns an array
    - Array contains all numbers from 1 to the number passed in
*/
