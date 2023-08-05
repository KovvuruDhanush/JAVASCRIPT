// We're creating an array called 'arr2' with some initial values.
arr2 = [12, 14, 15];

// The 'pop' method is used to remove the last element from the array.
// It also returns the removed element.
var a = arr2.pop(); // This removes the last element (15) and assigns it to the variable 'a'.
console.log(a); // This prints the removed element, which is 15.
// If you now print 'arr2', it will show [12, 14], as the last element was removed.
// console.log(arr2);

// The 'push' method is used to add an element to the end of the array.
arr2.push(143); // This adds the value 143 to the end of the array.
console.log(arr2); // Now 'arr2' will be [12, 14, 143].

// The 'shift' method is used to remove the first element from the array.
arr2.shift(); // This removes the first element (12) from the array.
console.log(arr2); // Now 'arr2' will be [14, 143].

// The 'unshift' method is used to add one or more elements to the beginning of the array.
arr2.unshift(132); // This adds the value 132 to the beginning of the array.
console.log(arr2); // Now 'arr2' will be [132, 14, 143].
