// Define an object named 'firstPerson' with properties.
let firstPerson = {
    name: 'Dhanush',
    age: 20,
    address: {
        city: 'lucknow',
        state: 'up'
    }
};

// Use JSON.parse() and JSON.stringify() to create a deep copy of 'firstPerson' named 'secondPerson'.
let secondPerson = JSON.parse(JSON.stringify(firstPerson));
// JSON.stringify() serializes the object into a JSON-formatted string.
// JSON.parse() parses the string back into an object, effectively creating a new copy.

// Modify the 'city' property of the 'address' object within 'secondPerson'.
secondPerson.address.city = 'Delhi';

// Print the contents of both 'firstPerson' and 'secondPerson' objects to the console.
console.log(firstPerson);  // The original object remains unchanged.
console.log(secondPerson); // The deep copied object with modified property.

// Explanation for each step:

// 1. You've defined an object named 'firstPerson' with properties 'name', 'age', and 'address'.
//    The 'address' property is another object with properties 'city' and 'state'.

// 2. To create a deep copy of the 'firstPerson' object:
//    - You use JSON.stringify() to serialize the object into a JSON-formatted string.
//    - Then, you use JSON.parse() to parse the string back into an object.
//    This effectively creates a new object 'secondPerson' with the same values but separate memory.

// 3. You modify the 'city' property of the 'address' object within 'secondPerson' to 'Delhi'.
//    This modification will not affect the 'firstPerson' object due to deep copying.

// 4. You use console.log() to print the contents of both objects to the console.
//    - 'firstPerson' will display the original values.
//    - 'secondPerson' will display the modified 'city' property.

// Deep copying ensures that nested objects are also copied, preventing unintended side effects.
// Modifying one object doesn't affect the other, providing data integrity.
