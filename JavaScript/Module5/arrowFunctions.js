// Arrow Functions: A concise way to define functions in JavaScript.

// Example 1: Arrow function without parameters
let test1 = () => {
    console.log("hey dhanush");
};
// This is an arrow function without parameters.
// It prints "hey dhanush" when called.
test1(); // Output: hey dhanush

// Example 2: Arrow function with one parameter
let test2 = (a) => {
    console.log(a);
};
// This arrow function takes one parameter 'a' and prints its value when called.
test2("Hello!"); // Output: Hello!

// Example 3: Arrow function with multiple parameters
let test3 = (a, b) => {
    console.log(a + b);
};
// This arrow function takes two parameters 'a' and 'b', and prints their sum when called.
test3(3, 5); // Output: 8

// Example 4: Regular function expression without arrow
let test4 = function () {
    console.log("hey dhanush");
};
// This is a regular function expression without using an arrow.
// It also prints "hey dhanush" when called.
test4(); // Output: hey dhanush

// Example 5: Regular function expression without arrow (with undefined variable 'a')
let test5 = function () {
    console.log(a);
};
// This regular function expression uses 'a', but 'a' is not defined in this scope.
// It will lead to a ReferenceError when called.
//test5(); // Uncommenting this line will result in an error

// Example 6: Regular function expression without arrow (with undefined variable 'a')
let test6 = function () {
    console.log(a);
};
// Similar to test5, this regular function also uses 'a' without defining it in this scope.
//test6(); // Uncommenting this line will result in an error

// Now, let's see the equivalences:

// Example 7: Arrow function equivalence with test1
let test7 = () => {
    console.log("hey dhanush");
};
// This is another way to define the same functionality as 'test1'.
test7(); // Output: hey dhanush

// Example 8: Arrow function equivalence with test2
let test8 = (a) => {
    console.log(a);
};
// This is another way to define the same functionality as 'test2'.
test8("Hello!"); // Output: Hello!

// Example 9: Arrow function equivalence with test3
let test9 = (a, b) => {
    console.log(a + b);
};
// This is another way to define the same functionality as 'test3'.
test9(3, 5); // Output: 8

// Summary:
// Arrow functions are a concise way to define functions.
// They can have no parameters, single parameters, or multiple parameters.
// Arrow functions often make code shorter and more readable.
// When using regular function expressions (not arrow), be cautious about variable scope.
