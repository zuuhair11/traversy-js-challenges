function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce( (sum, car) => {
        return sum + car.mileage;
    }, 0);

    const averageMileage = totalMileage / cars.length;
    
    const highestMileageCar = cars.reduce( (highest, car) => {
        return car.mileage > highest.mileage ? car : highest;
    }, cars[0]);

    const lowestMileageCar = cars.reduce( (lowest, car) => {
        return car.mileage < lowest.mileage ? car : lowest;
    }, cars[0]);

    
    return {
        averageMileage: parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}

module.exports = analyzeCarMileage;



/*
    1) Understanding the problem
    - Given an array of car objects, perform some analysis on car mileage

    2) Break it into sub-problem
    - Function will receive an array of car objects
    - Each object holds all the information about the car
    - We are gonna return an object that include
    - The average mileage of all cars
    - Using reduce gonna be helpful

    - And the car of the highest mileage
    - As well as the car of the lowest mileage
    - Using reduce gonna be heplful 

    - The total milege of all cars
    - Using reduce
*/
