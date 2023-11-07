function displayLikes(names) {
    const likesCount = names.length;

    if(likesCount) {
        if(likesCount === 1) {
           return `${names[0]} likes this`;

        } else if(likesCount === 2) {
           return `${names[0]} and ${names[1]} like this`;
           
        } else if(likesCount === 3) {
           return `${names[0]}, ${names[1]} and ${names[2]} like this`;

        } else {
           return `${names[0]}, ${names[1]} and ${likesCount - 2} others like this`;
        }

    } else {
       return 'no one likes this';
    }
}

module.exports = displayLikes;



/*
    1) Understanding the problem
    - Returns a string of names of who likes the post

    2) Break it into sub-problem
    - Function gonna takes in array of names,

    - If there's no likes(array is empty) return 
        'no one likes this'

    - If one person likes it, return 
        'name likes this';

    - If two people like it, return 
        'name1 and name2 like this';

    -If three people like it, return 
        'name1, name2 and name3 like this';
    
    - If more than three people like it, return 
        'name1, name2, and (x) others like this'
*/
