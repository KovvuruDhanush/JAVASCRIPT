// An expression is a combination of values, variables, and operators that results in a value.

// Example 1: Expression with addition

// Here, you have an expression where 'a' is assigned the value of the sum 2 + 3.
// The expression '2 + 3' evaluates to 5, which is then assigned to 'a'.
var a = 2 + 3;

// Example 2: Expression with a function

// You define a function expression named 'add' using the 'function' keyword.
// This is an anonymous function since it doesn't have a specific name.
// It takes two parameters, 'a' and 'b', and prints their sum.
var add = function(a, b) {
    console.log(a + b);
};

// You call the 'add' function expression with arguments 3 and 4.
add(3, 4);
// This executes the function and prints the sum, which is 7.

// Now, you assign the function expression 'add' to a variable 'a'.
var a = add;

// You call the function through the variable 'a' with arguments 3 and 6.
// The function executes and returns the sum (9), which is assigned to the variable 'b'.
var b = a(3, 6);

// You print the value of 'b', which is 9.
console.log(b);
// The output is 9.
