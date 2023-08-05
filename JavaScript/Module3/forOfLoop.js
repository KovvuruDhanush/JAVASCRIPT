// The 'for...of' statement creates a loop that iterates over iterable objects.
// Iterable objects include built-in strings, arrays, array-like objects like NodeList,
// as well as map and set objects.

// Example 1: Looping through an array using 'for...of'

// Imagine you have an array named 'scores' containing test scores.
var scores = [60, 90, 80, 75];

// The syntax for the 'for...of' loop is 'for (variable of iterable) { ... }'.
// Here, 'score' represents each value in the 'scores' array in each iteration.
for (var score of scores) {
    console.log(score); // This prints each test score.
}

// Example 2: Using the 'entries()' method to get indexes and values from an array

// You have an array named 'colors' with different color names.
var colors = ['red', 'green', 'yellow'];

// The 'entries()' method returns an iterator with index-value pairs.
// In this loop, '[index, color]' captures each pair.
for (var [index, color] of colors.entries()) {
    console.log(index + ' -> ' + color); // This prints index and color pairs.
}

// Example 3: Looping through characters in a string

// Imagine you have a string named 'str' containing a name.
var str = 'Dhanush';

// In this loop, 'i' represents each character in the string 'str'.
for (var i of str) {
    console.log(i); // This prints each character of the name.
}
