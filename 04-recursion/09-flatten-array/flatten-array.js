function flattenArray(arr) {
    let result = [];

    for(const item of arr) {
        if(Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

module.exports = flattenArray;



/*  1) Understanding the problem
    - Given a nested array of integers, returns new array:
    - With all the integers from the nested arrays

    2) Break it into sub-problem
    - For each item I have to determine, whether it's a number or an array
    - Suppose it's an array: call the function with array as an argument

    - Suppose it's a number: 
    - Push the number to the new array, then call the function again
    - By passing the array starting from 1
    - The base case going to be when the length of the array is 0
*/
