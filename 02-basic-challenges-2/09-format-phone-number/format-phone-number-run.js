const formatPhoneNumber = require('./format-phone-number');

const result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.table({ input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] });
console.table({ output: result });
