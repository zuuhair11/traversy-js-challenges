function generateHashtag(str) {
    const string = str.trim();
    if(!string) return false;


    const hashtag = string
        .split(' ')
        .reduce( (acc, letter) => {
            return acc + letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }, '#');
    
    // return hashtag.length < 140 ? hashtag : false;
    return hashtag.length < 140 && hashtag;
}

module.exports = generateHashtag;



/*
    1) Understanding the problem
    - From a given string return a #hashtag

    2) Break it into sub-problem
    - 
    
*/
