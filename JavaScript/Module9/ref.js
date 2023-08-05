// Create an object named 'firstperson' with properties 'name' and 'age'
let firstperson = {
    name: 'Dhanush',
    age: 20
}

// Create a reference 'secondperson' pointing to the same object as 'firstperson'
let secondperson = firstperson

// Modify the 'name' property of the 'firstperson' object
firstperson.name = 'maari'

// Print the contents of the 'firstperson' object
console.log(firstperson)
// Output: { name: 'maari', age: 20 }

// Print the contents of the 'secondperson' object
console.log(secondperson)
// Output: { name: 'maari', age: 20 }



















// In this code:

// You create an object named firstperson with properties name and age.
// You create a new variable secondperson and assign it the value of firstperson. However, note that this is not a deep copy; it's just creating another reference to the same object in memory.
// You change the name property of the firstperson object to 'maari'.
// Both firstperson and secondperson reference the same object in memory, so when you modify the name property of firstperson, it affects the same object that secondperson is referencing.
// When you print both objects, you see that both firstperson and secondperson are referencing the modified object with the name property changed to 'maari'.
// Remember, in JavaScript, when you assign an object to another variable, you're actually passing a reference to that object in memory, not creating a new independent copy of the object. This is why changes to the object through one variable are reflected in the other variable referencing the same object.


















