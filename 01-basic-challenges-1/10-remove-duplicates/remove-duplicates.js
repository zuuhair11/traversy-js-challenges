function removeDuplicates(arr) {
    // First attempt
    const uniqueItem = [];

    for(let i = 0; i < arr.length; i++) {
        if(!uniqueItem.includes(arr[i])) uniqueItem.push(arr[i]);
    }

    return uniqueItem;
}

module.exports = removeDuplicates;



/*  1) Understanding the problem
    - Remove any duplicated value from an array
    - Return a new one, without duplication

    2) Break it into sub-problem
    - Initialized an empty array
    - Loop through the array, each iteration check:
    - If the current item is actually already in the array
    - If so move on to the next one
    - Else push it to array because it's not duplicated  
*/
