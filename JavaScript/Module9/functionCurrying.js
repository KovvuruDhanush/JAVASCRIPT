// Define a function 'sum' that takes two arguments and logs their sum.
let sum = function(x, y){
    console.log(x + y);
};

// Call the 'sum' function with arguments 2 and 4.
sum(2, 4);
// Output: 6

// Define a curried function 'sumCurried' that takes one argument and returns a function.
let sumCurried = function (x) {
    return function (y) {
        console.log(x + y);
    };
};

// Call 'sumCurried' with argument 2, which returns a function.
let sumTwoNumbers = sumCurried(2);

// Call the returned function with argument 5.
sumTwoNumbers(5);
// Output: 7

// Explanation:

// 1. You define a function named 'sum' that takes two arguments 'x' and 'y'.
//    - Inside the function, you log the sum of 'x' and 'y'.

// 2. You call the 'sum' function with arguments 2 and 4.
//    - The sum of 2 and 4 is 6, which is logged to the console.

// 3. You define a curried function named 'sumCurried' that takes one argument 'x'.
//    - Inside 'sumCurried', you return an inner function that takes another argument 'y'.
//    - The inner function logs the sum of 'x' and 'y'.

// 4. You call 'sumCurried' with argument 2, which returns a function.
//    - The returned function is stored in the variable 'sumTwoNumbers'.

// 5. You call the returned function stored in 'sumTwoNumbers' with argument 5.
//    - The sum of 2 and 5 is 7, which is logged to the console.

// Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions,
// each taking a single argument. It allows for more flexible and reusable function composition.
