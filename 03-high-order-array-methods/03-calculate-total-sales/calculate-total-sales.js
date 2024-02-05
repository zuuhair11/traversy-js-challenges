function calculateTotalSalesWithTax(fruits, tax) {
    const totalSales = fruits.reduce( (total, fruit) => {
        const { price, quantity } = fruit;
        return total + price * quantity;
    }, 0);

    const taxAmount = totalSales * tax / 100;
    const totalSalesWithTax = totalSales + taxAmount;

    return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;



/*
    1) Understanding the problem
    - Calculate the total sales along with the tax rate

    2) Break it into sub-problem
    - Function gonna receive an array of fruit objects, and tax
    - Each object has a price and quantity that sold
    - Loop through them
    - For each iteration return the total sales of that product
    - Finaly. apply the given tax
    - Round to 2 decimal places
*/
