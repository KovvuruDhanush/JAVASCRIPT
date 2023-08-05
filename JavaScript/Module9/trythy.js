



let a = '';

if (a) {
    console.log('I am truthy');
} else {
    console.log('I am Falsy');
}

// Output: "I am Falsy"



















































// a is an empty string ('').
// In the if statement, JavaScript evaluates the value of a in a boolean context. An empty string is considered falsy, so the condition evaluates to false.
// Therefore, the code inside the else block is executed, and "I am Falsy" is printed to the console.
// Regarding the values you mentioned as falsy:

// false
// 0
// 0n (BigInt with value 0)
// Empty string ('' or "")
// null
// undefined
// NaN (Not-a-Number)
// All these values are considered falsy in JavaScript when evaluated in a boolean context.