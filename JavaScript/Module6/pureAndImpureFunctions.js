// Impure Function with External Factor:
var a = 4;

function add(x) {
    console.log(x + a);
}

add(2);
// In this impure function, the external factor 'a' affects the output.
// If 'a' changes, the output changes even if the input 'x' remains the same.

// Pure Function with Parameters:
function addPure(x, a) {
    return x + a;
}

console.log(addPure(2, 4));
// This is a pure function because it takes all required parameters as input and returns the result.
// It does not depend on any external factors and produces the same output for the same inputs.

// Side Effects:
// A side effect is when a function interacts with external resources, like the console.
// In the impure version of 'add', the console.log statement is a side effect.
// In the pure version of 'addPure', there are no side effects.

// Summary:
// - Impure functions can be affected by external factors, leading to different outputs.
// - Pure functions produce the same output for the same inputs and do not rely on external factors.
// - Side effects are interactions with external resources, like console.log, which make a function impure.
