// Using 'var'
function varExample() {
    if (true) {
        var varValue = 10;
    }
    console.log(varValue); // Output: 10
}
varExample();

// Using 'let'
function letExample() {
    if (true) {
        let letValue = 20;
    }
    // 'letValue' is not accessible here due to block scope
    // console.log(letValue); // Uncommenting this line will result in an error
}
letExample();

// Re-declaration with 'var'
var varNum = 5;
var varNum = 8; // Re-declaration allowed
console.log(varNum); // Output: 8

// Re-declaration with 'let' (not allowed)
// let letNum = 5;
// let letNum = 8; // Uncommenting this line will result in an error

// Hoisting example with 'var'
