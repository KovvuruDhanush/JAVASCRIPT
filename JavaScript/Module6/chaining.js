// Chaining in JavaScript

// Chaining is a process where multiple array methods are applied in sequence to perform operations on the data.

// Example: Filtering and Mapping with Chaining
let arr = [
    { name: 'A', age: 14, gender: "M" },
    { name: 'B', age: 34, gender: "M" },
    { name: 'C', age: 19, gender: "F" },
    { name: 'D', age: 15, gender: "F" },
    { name: 'E', age: 17, gender: "F" },
    { name: 'F', age: 143, gender: "M" },
    { name: 'G', age: 16, gender: "F" },
    { name: 'H', age: 16, gender: "M" },
    { name: 'I', age: 12, gender: "M" },
];

// In this example, we want to find the ages of all males.

// Traditional approach using separate filter and map:
// let males = arr.filter(function (obj) {
//     return obj.gender == 'M';
// });

// let ageOfMales = males.map(function (male) {
//     return male.age;
// });

// Chaining approach:
let males = arr.filter(function (obj) {
    return obj.gender == 'M';
}).map(function (male) {
    return male.age;
});

console.log(males);
// Output: [14, 34, 143, 16, 12]

// In the chaining approach:
// - We use the 'filter' method to filter the array based on the 'gender' property.
// - Then, we immediately use the 'map' method to extract the 'age' property from the filtered males.

// Chaining provides a more concise and readable way to perform multiple operations in sequence on an array.
// It's a powerful technique for transforming and manipulating data.

// Summary:
// - Chaining involves applying multiple array methods in sequence to perform operations on data.
// - It helps avoid creating intermediate arrays and improves code readability.
// - Chaining is a powerful technique for data transformation and manipulation.
