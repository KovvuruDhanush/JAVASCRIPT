// Imperative vs Declarative Code:

// Imperative Approach:
const a = 4;
const aSquared = a * a;
let isEven;

if (aSquared % 2 === 0) {
    isEven = true;
} else {
    isEven = false;
}
console.log(isEven);
// In the imperative approach, we explicitly write the steps to determine if 'aSquared' is even.
// It focuses on how to achieve the desired result step by step.

// Declarative Approach:
const checkForSquare = (x) => (x * x % 2 === 0 ? true : false);
console.log(checkForSquare(4));
// In the declarative approach, we define a function 'checkForSquare' that directly calculates if the number is even.
// It focuses on expressing the desired outcome without getting into the detailed steps.

// Summary:
// - Imperative code focuses on the step-by-step process of achieving the result.
// - Declarative code focuses on expressing what the code should achieve, without specifying every detail.
// - Declarative code is often more concise and easier to understand.
