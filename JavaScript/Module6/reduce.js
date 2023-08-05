// Using the some Method
// The `some` method checks if at least one element in the array satisfies the given condition.
// It returns true if any element satisfies the condition, otherwise, it returns false.

const transactions = [-1000, -3000, -4000, 2000, -898, -3800, -4500];

// Checking if there is at least one positive transaction amount using the some method.
let resultSome = transactions.some(function(n) {
    return n > 0;  // Condition: Is the transaction amount greater than zero?
});

console.log("At least one positive transaction:", resultSome);  // Output: true (because there's a positive transaction)

// Using the every Method
// The `every` method checks if all elements in the array satisfy the given condition.
// It returns true if all elements satisfy the condition, otherwise, it returns false.

// Checking if all transaction amounts are positive using the every method.
let resultEvery = transactions.every(function(n) {
    return n > 0;  // Condition: Is the transaction amount greater than zero?
});

console.log("All transactions are positive:", resultEvery);  // Output: false (because there are negative transactions)
