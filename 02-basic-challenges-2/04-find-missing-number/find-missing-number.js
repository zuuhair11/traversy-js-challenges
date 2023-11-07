function findMissingNumber(arr) {
    // First attempt
    if(!arr || arr.length === 0) return undefined;

    const expectedNumbers = [];
    for(let i = 1; i <= arr.length + 1; i++) {
        expectedNumbers.push(i);
    }

    return expectedNumbers.find( number => !arr.includes(number) );

    
    // Second attempt
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    
    // Using gauss formula
    let actualSum = 0;
    for(let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;

    // Using reduce
    return expectedSum - arr
        .reduce( (acc, cur) => {
            return acc += cur;
        }, 0);
}

module.exports = findMissingNumber;



/*
    1) Understanding the problem
    Function gonna takes in an array of unique numbers
    From 1 to n, where one number is missing. return it

    2) Break it into sub-problem
    Array contains unique numbers
    Between 1 and n, there's one missing number
    Always gonna starts from 1
*/
