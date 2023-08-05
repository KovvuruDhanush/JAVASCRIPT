// Undefined Example
let a; // Declare a variable 'a' without assigning a value.
console.log(a); // Output: undefined
// The variable 'a' is declared but not assigned a value, so its value is 'undefined'.

function add(a, b) {
    let c = a + b; // Declare a variable 'c' and calculate the sum of 'a' and 'b'.
}
let sum = add(2, 3); // Calling the 'add' function does not return any value.
console.log(sum); // Output: undefined
// The 'add' function is called, but it doesn't have a return statement.
// Therefore, the variable 'sum' receives 'undefined'.

// Null Example
let myLife = null; // Declare a variable 'myLife' and assign the value null to it.
console.log(myLife); // Output: null
// The variable 'myLife' is explicitly assigned the value null, indicating intentional absence of value.

// Not Defined Example
console.log(b); // Output: ReferenceError: b is not defined
// Trying to access a variable 'b' that is not declared or defined results in a ReferenceError.
// This error occurs because the variable 'b' has not been declared before being used.



















// The variable a is declared but not assigned a value. Printing a results in undefined.

// The function add is defined with parameters a and b. Inside the function, a variable c is declared to calculate the sum of a and b. However, the function doesn't return a value, so when you call it and assign the result to sum, sum becomes undefined.

// The variable myLife is explicitly assigned the value null, indicating that it intentionally has no value.

// Trying to access the variable b, which has not been declared or defined, results in a ReferenceError. This is because the variable b is not recognized by the interpreter.

// In summary, undefined indicates an uninitialized variable or a function without a return statement, null represents an intentional absence of value, and a ReferenceError occurs when trying to access a variable that is not defined.














