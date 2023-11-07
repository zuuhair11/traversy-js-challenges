const validateEmail = require('./validate-email');

const result1 = validateEmail('brad@gmail.com');
const result2 = validateEmail('bradgmailcom');

console.table({'brad@gmail.com': result1});
console.table({'bradgmailcom': result2});
