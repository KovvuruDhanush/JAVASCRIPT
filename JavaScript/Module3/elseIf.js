// Assume 'a' holds a numeric value representing a student's score.

var a = 87; // For example, 'a' is set to 87.

// We use an if-else if-else ladder to check different score ranges and assign grades accordingly.
if (a >= 90 && a <= 100) {
    console.log("A GRADE"); // If 'a' is between 90 and 100 (inclusive), it's an A Grade.
}
else if (a >= 80 && a <= 89) {
    console.log("B GRADE"); // If 'a' is between 80 and 89 (inclusive), it's a B Grade.
}
else if (a >= 70 && a <= 79) {
    console.log("C GRADE"); // If 'a' is between 70 and 79 (inclusive), it's a C Grade.
}
else if (a >= 60 && a <= 69) {
    console.log("D GRADE"); // If 'a' is between 60 and 69 (inclusive), it's a D Grade.
}
else {
    console.log("OK Chill"); // If 'a' doesn't fall in any of the above ranges, it's "OK Chill".
}
