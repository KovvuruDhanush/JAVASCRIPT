// Imagine you have an object called 'colors' that holds different color properties.

// Each property has a name (e.g., 'primary', 'secondary') and a color value associated with it.
var colors = {
    primary: 'blue',
    secondary: 'red',
    tertiary: 'white'
};

// You can use the 'for-in' loop to go through each property in the 'colors' object.

// Here, 'color' represents each property name (like 'primary', 'secondary', etc.) in each iteration.
for (var color in colors) {
    // Now, you can access the color value using the 'color' variable as the key.
    console.log(colors[color]); // This prints the color value for each property.
}
console.log("()()()()()()()()()()()()");

// Now, let's see how the 'for-in' loop works with arrays.

// You have an array named 'colorsArray' with different color names as elements.
var colorsArray = ['Blue', 'Green', 'Array'];

// In this loop, 'i' represents each index in the 'colorsArray'.
for (var i in colorsArray) {
    // You can access the array elements using the index 'i'.
    console.log(colorsArray[i]); // This prints each color name from the array.
}
