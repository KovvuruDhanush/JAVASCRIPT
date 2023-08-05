// Problems with 'var'

// Issue 1: Re-declaration is Allowed
var a = 21;
var a = 31; // Re-declaration of 'a' is allowed
console.log(a); // Output: 31

// In JavaScript, variables declared with 'var' can be re-declared in the same scope.
// This can lead to confusion and unintended behavior.

// Issue 2: Lack of Block Scope
if (a === 31) {
    var b = 50;
    console.log(b); // Output: 50
}

// Variables declared with 'var' are not block-scoped, they are function-scoped.
// This means 'b' is accessible outside the block, which can lead to unintended side effects.

console.log(b); // Output: 50

// Issue 3: Function Scope
function add() {
    var c = 30;
    console.log(c); // Output: 30
}
add();

// Variables declared with 'var' are function-scoped, meaning they are only accessible within the function they are declared in.
// This can lead to confusion when trying to access 'c' outside the function.

// Trying to access 'c' outside the function will result in an error:
// console.log(c); // Uncommenting this line will result in an error

// In summary:
// - 'var' allows re-declaration and lacks block scope, leading to confusion and unintended variable sharing.
// - Variables declared with 'var' are function-scoped, which can result in unexpected behavior when accessed outside their defining function.

// To avoid these issues, it's recommended to use 'let' or 'const', which provide block scope and better scoping rules.
