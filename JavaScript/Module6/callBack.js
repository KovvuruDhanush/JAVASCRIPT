// Callback Functions and Higher-Order Functions

// A callback function is a function that is passed as an argument to another function.
// Higher-order functions are functions that accept one or more callback functions as arguments.

// Example 1: Using Callback Functions
// function printFirstName(firstname, cb) {
//     console.log(firstname);
//     cb("KOVVURU");
// }
// function printLastName(lastname) {
//     console.log(lastname);
// }
// printFirstName('Dhanush', printLastName);
// Output:
// Dhanush
// KOVVURU

// In this example, 'printFirstName' takes a first name and a callback function 'cb'.
// It prints the first name and then calls the callback function with the last name.

// Example 2: Using Arrow Functions and Higher-Order Functions
const isEven = (x) => {
    return x % 2 === 0;
};

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num);
    console.log(`The number ${num} is an Even Number: ${isNumEven}`);
};

printResult(isEven, 16);
// Output: The number 16 is an Even Number: true

// In this example:
// - 'isEven' is a callback function that checks if a number is even.
// - 'printResult' is a higher-order function that takes a callback function 'evenFn' and a number 'num'.
// - Inside 'printResult', the 'isEven' callback is executed with the provided number.
// - The result is printed using a template literal.

// Callback functions and higher-order functions are essential concepts in JavaScript.
// They enable better modularity, reusability, and flexibility in code design.

// Summary:
// - Callback functions are functions passed as arguments to other functions.
// - Higher-order functions accept one or more callback functions as arguments.
// - Callbacks and higher-order functions are powerful for creating modular and flexible code structures.
