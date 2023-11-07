function arrayIntersection(arr1, arr2) {
    // First attempt
    const intersection1 = [];

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j] && !intersection1.includes(arr1[i])) {
                intersection1.push(arr1[i]);
            }
        }
    }
    
    
    // Second atttempt
    const set1 = new Set(arr1);
    const intersection2 = [];
  
    for(let num of arr2) {
        if(set1.has(num)) {
            intersection2.push(num);
        }
    }
    
    return intersection1;
    return intersection2;
}

module.exports = arrayIntersection;



/*
    1) Understanding the problem
    - Return the elements that appear in both arrays

    2) Break it into sub-problem
    - Function should takes in two arrays
    - Reads all the elements inside them
    - Return all the elements that intersection
*/