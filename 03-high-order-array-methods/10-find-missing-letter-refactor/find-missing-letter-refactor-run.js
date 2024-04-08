const findMissingLetter = require('./find-missing-letter-refactor');

const result1 = findMissingLetter(['a', 'b', 'c', 'e']);
const result2 = findMissingLetter(['m', 'n', 'o', 'q', 'r']);

console.table({
    "['a', 'b', 'c', 'e']": result1,
    "['m', 'n', 'o', 'q', 'r']": result2
});
