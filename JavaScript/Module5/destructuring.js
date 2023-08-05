// The destructuring assignment syntax unpacks values from arrays or properties from objects into distinct variables.

// Destructuring an array
let arr = ['Dhanush', 'Rahul', ,'MAARI']; // An array with 4 elements
let [a, b, c, d] = arr; // Destructuring the array into individual variables
console.log(a); // Output: Dhanush
console.log(b); // Output: Rahul
console.log(c); // Output: undefined (since the array has an empty slot)
console.log(d); // Output: MAARI

// Destructuring an object
let myObj = {
    name: 'Dhanush',
    age: 20,
    gender: 'Male',
    address: {
        country: 'england',
        city: 'London'
    }
};

let { p, q, r } = myObj; // Destructuring an object using the keys as variable names
console.log(p); // Output: undefined (because 'p' is not a property of myObj)
console.log(q); // Output: undefined (because 'q' is not a property of myObj)
console.log(r); // Output: undefined (because 'r' is not a property of myObj)

let { name: n, age, gender, address: { country: j } } = myObj;
// Destructuring with renaming variable names and accessing nested properties
console.log(n); // Output: Dhanush
console.log(age); // Output: 20
console.log(gender); // Output: Male
console.log(j); // Output: england

// Note: The following line will throw an error since 'address' is not defined in this scope
//console.log(address); // Uncommenting this line will result in an error
