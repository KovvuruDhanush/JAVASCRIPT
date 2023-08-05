// In JavaScript, variables are "hoisted", meaning they are moved to the top of their scope during compilation.
// However, only the variable declaration (not the assignment) is hoisted.

console.log(x); // At this point, 'x' is declared due to hoisting, but it's not yet assigned a value.
var x = 10;     // This assigns the value 10 to the variable 'x'.

// The output of the console.log statement will be 'undefined'.
// Even though the variable 'x' is declared, it hasn't been assigned a value at the time of the console.log call.
