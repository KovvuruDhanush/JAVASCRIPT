// A 'while' loop evaluates the condition inside the parentheses.
// If the condition is true, the code inside the loop executes.
// The condition is evaluated again, and this process continues until the condition is false.
// When the condition evaluates to false, the loop stops.

// Example 1: Using 'while' loop to print numbers from 1 to 10

// First, you initialize the variable 'i' to 0.
var i = 0;

// The 'while' loop checks if 'i' is less than or equal to 10.
// If true, it enters the loop and executes the code inside.
// It then increments 'i' by 1.
// The loop continues until 'i' is no longer less than or equal to 10.
while (i <= 10) {
    console.log(i); // This prints numbers from 0 to 10.
    i++; // Increment 'i' by 1.
}

// Example 2: Using 'do...while' loop to print a number even if the condition is false initially

// Here, you initialize 'i' to 11 and 'n' to 10.
var i = 11;
var n = 10;

// The 'do...while' loop is similar to the 'while' loop,
// but the code inside the loop executes at least once, even if the condition is false.
// It checks if 'i' is less than or equal to 'n', enters the loop, and prints 'i'.
// Then, it increments 'i' by 1.
// This continues as long as 'i' is less than or equal to 'n'.
do {
    console.log(i); // This prints 11 once, even though the condition is false.
    i++; // Increment 'i' by 1.
} while (i <= n);
