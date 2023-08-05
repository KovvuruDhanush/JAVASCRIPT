// Functional Programming in JavaScript

// 1. Imperative and Declarative Code:
// - Imperative programming tells the computer how to do things step by step.
// - Declarative programming focuses on describing what you want to achieve.
// Example:
// Imperative (Step by step):
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}

// Declarative (Describe what you want):
let sumDeclarative = Array.from({ length: 10 }, (_, i) => i).reduce((acc, curr) => acc + curr, 0);

// 2. Pure Functions and Side Effects:
// - Pure Function: Always gives the same output for the same input, doesn't change things outside.
// - Side Effects: Changes things outside the function or interacts with the world.
// Example of Pure Function:
function add(a, b) {
    return a + b;
}

// Example of Function with Side Effect:
let total = 0;
function addToTotal(n) {
    total += n;
}

// 3. Higher Order Functions (HOF):
// - Functions that use other functions or return functions.
// Examples: map, filter, reduce
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num ** 2);

// 4. Composition:
// - Building complex functions by putting together simpler functions.
// Example:
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const transform = compose(addOne, multiplyByTwo);
console.log(transform(5)); // Output: 11

// 5. Closures:
// - A function remembers where it came from, even when used somewhere else.
// Example:
function outer() {
    let outerVar = 'I am from outer';
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
let innerFunc = outer();
innerFunc(); // Output: "I am from outer"

// 6. Currying:
// - Turning functions with many inputs into a series of single-input functions.
// Example:
function multiply(a) {
    return function (b) {
        return a * b;
    }
}
let multiplyByTwoFunc = multiply(2);
console.log(multiplyByTwoFunc(5)); // Output: 10

// Functional programming makes code more predictable, modular, and testable.

// Summary:
// - Functional programming uses functions as building blocks.
// - Key concepts: imperative vs. declarative, pure functions, HOFs, composition, closures, and currying.
// - These concepts lead to code that's easier to understand, maintain, and scale.
