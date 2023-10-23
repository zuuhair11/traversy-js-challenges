function findMaxNumber(numbers) {
    // First attempt
    let maxNumber1 = numbers[0];

    for(let number of numbers) {
        if(number > maxNumber1) maxNumber1 = number
    }

    return maxNumber1;


    // Second attempt
    let maxNumber2 = numbers[0];

    numbers.forEach(function(number) {
        if(number > maxNumber2) {
            maxNumber2 = number;
        }
    });
    
    return maxNumber2;
    

    // Third attempt
    let maxNumber3;

    for(let i = 0; i < numbers.length; i++) {
        // First iteration assign the maxNumber
        // I used this just to count for negative numbers
        if(maxNumber3 === undefined) maxNumber3 = numbers[i];

        // Check if current number is larger than the maxNumber
        if(numbers[i] > maxNumber3) {
            maxNumber3 = numbers[i];

        // If not, jump to the next iteration
        } else {
            continue;
        }
    }

    return maxNumber3;
}

module.exports = findMaxNumber;



/*  1) Understand the problem
    - Find the largest number in the array

    2) Break it into sub-problem
    - Array has only numbers
    - Array has only positive numbers
    - Bonus, negative too
*/