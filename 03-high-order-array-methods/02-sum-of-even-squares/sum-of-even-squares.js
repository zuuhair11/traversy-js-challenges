function sumOfEvenSquares(numbers) {
    // First attempt
    const evenSquares1 = numbers
        .filter( num => num % 2 === 0)
        .map( num => num ** 2)
        .reduce( (acc, cur) => acc + cur, 0)
        
    return evenSquares1;

    // Second attempt
    const evenSquares2 = numbers.reduce( (acc, cur) => {
        if(cur % 2 === 0) return acc + cur**2;
        else return acc;

    }, 0);

    return evenSquares2;
}

module.exports = sumOfEvenSquares;



/*
    1) Understanding the problem
    - Return the squares of the even numbers

    2) Break it into sub-problem
    - Function gonna take an array of numbers
    - Loop through the array of numbers
    - For each iteration, check:
    - If it's even: return its square
    - Else jump to the next number
*/
