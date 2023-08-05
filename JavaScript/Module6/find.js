// Higher Order Functions: find and findIndex

// Higher-order functions are functions that operate on other functions or return functions.

// Example 1: Using the 'find' Function
const transactions = [100, 2300, -7000, 300, -1455, -999];

// The 'find' function returns the first element in the array that satisfies a condition.
// In this case, we're using it to find the first negative transaction amount.
let withdrawal = transactions.find(function (n) {
    return n < 0;
});

console.log(withdrawal);
// Output: -7000

// The 'find' function iterates through each element of the array until it finds the first element that satisfies the condition.
// Once the condition is satisfied, that element is returned.

// Example 2: Using the 'findIndex' Function
let withdrawalIndex = transactions.findIndex(function (n) {
    return n < 0;
});

console.log(withdrawalIndex);
// Output: 2

// The 'findIndex' function returns the index of the first element in the array that satisfies the condition.
// In this case, it returns the index of the first negative transaction amount.

// Both 'find' and 'findIndex' functions are useful for searching and locating elements in an array based on conditions.

// Summary:
// - The 'find' function returns the first element in the array that satisfies a condition.
// - The 'findIndex' function returns the index of the first element in the array that satisfies a condition.
// - Both functions are higher-order functions that enhance the functionality of arrays.
