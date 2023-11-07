const diceGameSimulation = require('./dice-game');

const result = diceGameSimulation(10);

console.table({10: result});
