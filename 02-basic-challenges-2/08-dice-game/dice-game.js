function diceGameSimulation(numSimulations) {
    const results = [];

    const rollDice = function() {
        return Math.trunc(Math.random() * 6) + 1;
    }

    for(let i = 0; i < Number(numSimulations); i++) {
        results.push({
            dice1: rollDice(),
            dice2: rollDice()
        });
    }

    return results.map( item => {
        const { dice1, dice2 } = item;
        const total = dice1 + dice2;

        return {
            ...item,
            sum: item.dice1 + item.dice2,
            result: (total === 7 || total === 11) 
                ? 'win'
                : (total === 2 || total === 3 || total === 12)
                    ? 'lose'
                    : 'roll again'
        }
    });
}

module.exports = diceGameSimulation;



/*
    1) Understanding the problem
    - Simulatate the dice game

    2) Break it into sub-problem
    - Function gonna take a number of times to simulate the dice
    - For each simulation we check:
        if a 7 or 11 are rolled => win
        if a 2, 3 or 12 are rolled => lose
        else => roll again

    - Function gonna return an array of objects
    - Each object represent a simulation result
    - example: [
        { dice1: 1, dice2: 5, sum: 6, result: 'roll again' },
        { dice1: 5, dice2: 6, sum: 11, result: 'win' },
        { dice1: 1, dice2: 1, sum: 2, result: 'lose' }
    ];
*/
