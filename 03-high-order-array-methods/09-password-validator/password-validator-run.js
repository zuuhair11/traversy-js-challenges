const validatePassword = require('./password-validator');

const result1 = validatePassword('Abc12345');
const result2 = validatePassword('password');

console.table({
    'Abc12345': result1, 
    'password': result2
});
