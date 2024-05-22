function arraySum(arr) {
    // Your code here
    if(arr.length === 0) {
        return 0;
    }

    return arr[0] + arraySum(arr.slice(1));
}

module.exports = arraySum;



/*  1) Understanding the problem
    - Return the sum of the array using recursion

    2) Break it into sub-problem
    - Take the first item in the array + calling the function with
    - By passing the array to the function starting from 1
    - And for each call I will check the argument
    - If it's undefined, return  starts unwind
*/
