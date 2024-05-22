function numberRange(startNum, endNum) {
    if(startNum === endNum) {
        return [startNum];
    }

    const numbers = numberRange(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
}

module.exports = numberRange;



/*  1) Understanding the problem
    - The function takes in a start number and an end number and returns
    - An array of numbers from start number to end number
    - Use recursion

    2) Break it into sub-problem
    - Calling the function every time with a smaller value
    - By passing start number and one less than end number
    - Until the start number === end number than:
    - Then we are going to start unwinding:
    - First we are going to return [1]
    - Next we are going to push the previous number
    - The previous number is the end number the one:
    - We were decrementing for every call

    - Example:
    - range(1, 5)
    -   range(1, 4)
    -       range(1, 3)
    -           range(1, 2)
    -                range(1, 1)
    -                [1]                    : [1]
    -           [1].push(2)                 : [1, 2]
    -       [1, 2].push(3)                  : [1, 2, 3]
    -   [1, 2, 3].push(4)                   : [1, 2, 3, 4]
    - [1, 2, 3, 4].push(5)                  : [1, 2, 3, 4, 5]

    - [1, 2, 3, 4, 5]
*/
