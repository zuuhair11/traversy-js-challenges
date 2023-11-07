const areAllCharactersUnique = require('./are-all-chars-unique');

const result1 = areAllCharactersUnique('abcdefg');
const result2 = areAllCharactersUnique('abcdefgA');
const result3 = areAllCharactersUnique('programming');

console.table({ 'abcdefg':result1 });
console.table({ 'abcdefgA':result2 });
console.table({ 'programming':result3 });
