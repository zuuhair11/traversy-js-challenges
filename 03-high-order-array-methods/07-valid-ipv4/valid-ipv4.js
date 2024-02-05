const isValidIPv4 = (input) => {
    const octets = input.split('.');
    if(octets.length !== 4) return false;

    return octets.every( octet => {
        const num = parseInt(octet);
        return num >= 0 && num <= 255 && num.toString() === octet;
    });
};

module.exports = isValidIPv4;



/*
    1) Understanding the problem
    - Check the input is valid IPv4

    2) Break it into sub-problem
    - Function gonna receive an input
    - Check the input whether a valid IPv4
    - IPv4 address consist of four octets
    - These octets values between 0 and 255

    - '123.45.67.89' => true
    - As long as the input has comma seperated
    - We can use split method to convert input into an array
    - Then check the length, remember should be 4
    - Then we can loop through it, and for each iteration
    - Check whether the value is between 0 and 255
    - For that use case we are gonna use the every method
    - That returns true if everything match else false
*/
