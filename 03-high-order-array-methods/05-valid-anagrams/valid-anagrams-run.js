const validAnagrams = require('./valid-anagrams');

const result = validAnagrams('app', 'ppa');

console.table({str1: 'app', str2: 'ppa', result, result });
