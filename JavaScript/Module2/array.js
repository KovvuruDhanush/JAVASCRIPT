// Here, we're creating an array called 'arr' that holds a collection of different types of data.
var arr = [12, "Dhanush", true, 12.4];

// This line prints the entire array to the console.
console.log(arr);

// Now, we're accessing a specific value from the array using its index.
// Arrays are zero-indexed, meaning the first element is at index 0, second element at index 1, and so on.
var a = arr[1]; // This gets the value at index 1 (which is "Dhanush") and assigns it to the variable 'a'.
console.log(a); // This prints the value of 'a', which is "Dhanush".
console.log(arr[3]); // This directly prints the value at index 3, which is 12.4.

// Here, we are changing the value at index 1 to "maari".
arr[1] = "maari"; // This modifies the value at index 1 to "maari".
console.log(arr[1]); // Now, when we print the value at index 1, it will be "maari".

// The 'length' property of an array indicates how many elements it contains.
console.log(arr.length); // This prints the length of the array, which is 4.
