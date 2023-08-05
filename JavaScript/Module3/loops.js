// Imagine you have a string named 'a' with the value "Dhanush".
var a = "Dhanush";

// Now, you're using a 'for' loop to repeatedly print the value of 'a'.

// The loop starts with initializing 'i' as 0.
// The condition checks if 'i' is less than 10.
// The loop will continue as long as the condition is true.
// After each iteration, 'i' is incremented by 1.
for (var i = 0; i < 10; i++) {
    console.log(a); // This prints "Dhanush" 10 times.
}

// Now, you have an array named 'num' with numbers.

// You also create an empty array named 'num2' to store the squared values.
var num = [2, 3, 4, 5, 6, 7, 8, 9];
var num2 = [];

// You're using a 'for' loop to go through each element in the 'num' array.

// The loop starts with initializing 'i' as 0.
// The condition checks if 'i' is less than the length of 'num' (which is 8).
// The loop will continue as long as the condition is true.
// After each iteration, 'i' is incremented by 1.
for (var i = 0; i < num.length; i++) {
    // Inside the loop, you calculate the square of the current element and push it to 'num2'.
    num2.push(num[i] * num[i]);
}

// Finally, you print the 'num2' array that contains the squared values.
console.log(num2); //
