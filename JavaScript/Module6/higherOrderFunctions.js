// Using the 'map' Method for Transformation:
// The 'map' method is a new approach to perform operations on each element of an array and get a new array with the results.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (n) {
    return n * n; // Squaring each number
});
console.log(squaredNumbers);
// 'map' method loops through each element and applies the provided function to it.
// It then collects the results in a new array and returns that array.

// Another Example with Calculations:
const transactions = [1000, 2000, 3000, 4000, 500];
const convertedAmounts = transactions.map(function (n) {
    return (n / 80).toFixed(0); // Converting amounts using division and rounding
});
console.log(convertedAmounts);

// The 'forEach' Method for Looping:
// The 'forEach' method is used to loop through an array and perform an operation, but it doesn't create a new array with results.

const transactions1 = [1000, 2000, 3000, 4000, 500];
transactions1.forEach(function (n) {
    console.log((n / 80).toFixed(0)); // Converting and logging amounts
});
// Unlike 'map', 'forEach' doesn't return a new array; it's mainly used for side effects like logging.

// In Summary:
// - 'map' is great when you want to transform each element of an array and get a new array with results.
// - 'forEach' is useful for looping through an array and performing operations without creating a new array.
// - Both methods help to simplify array operations and make code more readable.
