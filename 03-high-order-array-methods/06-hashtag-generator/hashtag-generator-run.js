const generateHashtag = require('./hashtag-generator');

const result = generateHashtag('hello world');

console.table({ 'hello world': result });
