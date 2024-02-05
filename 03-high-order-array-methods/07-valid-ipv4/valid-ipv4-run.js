const isValidIPv4 = require('./valid-ipv4.js');

const result1 = isValidIPv4('122.164.23.21');
const result2 = isValidIPv4('122.164.23.21.33');

console.table({
    '122.164.23.21': result1, 
    '122.164.23.21.33': result2
});
