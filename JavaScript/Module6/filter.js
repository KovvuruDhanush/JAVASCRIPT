// Filtering Even Numbers in an Array

// The goal is to filter even numbers from an array and create a new array containing only those even numbers.

let number = [2, 3, 4, 45, 6, 7, 8, 5];

// Initialize an empty array to store even numbers.
let evenNum = [];

// The 'filter' method is used to check a condition and create a new array containing elements that satisfy the condition.
// In this case, we're using the 'filter' method to extract even numbers from the 'number' array.
// The condition 'n % 2 == 0' checks if a number is even.

evenNum = number.filter(function (n) {
    return n % 2 == 0;
});

console.log(evenNum);
// Output: [2, 4, 6, 8]

// In this code:
// - The 'filter' method iterates through each element of the 'number' array.
// - For each element, the condition 'n % 2 == 0' checks if the number is even.
// - If the condition is true, the number is added to the 'evenNum' array.

// The resulting 'evenNum' array contains only the even numbers from the original 'number' array.

// Using the 'filter' method to extract elements based on conditions is a common technique for data manipulation in JavaScript.

// Summary:
// - The 'filter' method creates a new array containing elements that satisfy a given condition.
// - In this case, the condition 'n % 2 == 0' checks for even numbers.
// - The 'filter' method is a powerful tool for extracting specific elements from an array.
