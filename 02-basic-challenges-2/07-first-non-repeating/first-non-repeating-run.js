const findFirstNonRepeatingCharacter = require('./first-non-repeating');

const result1 = findFirstNonRepeatingCharacter('programming');
const result2 = findFirstNonRepeatingCharacter('abacddbec');

console.table({'programming': result1});
console.table({'abacddbec': result2});
