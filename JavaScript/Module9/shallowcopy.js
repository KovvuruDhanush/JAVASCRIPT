// ShallowCopy.js

// Create an object named 'firstPerson' with properties 'name' and 'age'
let firstPerson = {
    name: 'Dhanush',
    age: 20
}

// Perform a shallow copy of the 'firstPerson' object into 'secondPerson'
let secondPerson = { ...firstPerson }

// Modify the 'name' property of the 'secondPerson' object
secondPerson.name = 'maari'

// Print the contents of the 'firstPerson' object
console.log(firstPerson)
// Output: { name: 'Dhanush', age: 20 }

// Print the contents of the 'secondPerson' object
console.log(secondPerson)
// Output: { name: 'maari', age: 20 }
