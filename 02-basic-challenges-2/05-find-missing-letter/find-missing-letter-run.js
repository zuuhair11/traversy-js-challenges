const findMissingLetter = require('./find-missing-letter');

result = findMissingLetter(['a', 'b', 'c', 'd', 'f', 'g']);

console.table({'input': ['a', 'b', 'c', 'd', 'f', 'g']});
console.table({'missing letter is': result});