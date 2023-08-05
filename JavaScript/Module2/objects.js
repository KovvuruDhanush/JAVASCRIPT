// Here, we're creating an object named 'person' with key-value pairs.
// This object represents information about a person.
var person = {
    firstName: "kovvuru", // 'firstName' is the key, and "kovvuru" is the value.
    lastName: "Dhanush", // 'lastName' is the key, and "Dhanush" is the value.
    age: 20, // 'age' is the key, and 20 is the value.
    owncar: false // 'owncar' is the key, and false is the value (a boolean).
};

// This line prints the entire 'person' object to the console.
console.log(person);

// You can access values from an object using the dot notation.
console.log(person.lastName); // This prints the value associated with the 'lastName' key, which is "Dhanush".

// Alternatively, you can also use bracket notation to access values using the key name as a string.
// The syntax is: OBJECT_NAME['KEY_NAME']
var b = person['firstName']; // This assigns the value associated with the 'firstName' key ("kovvuru") to the variable 'b'.
console.log(b); // This prints the value of 'b', which is "kovvuru".

// Here, we're creating another object named 'person2' with its own key-value pairs.
var person2 = {
    name: "Ravi",
    age: 3,
    place: "Nandyal"
};

// You can directly access a specific value from the 'person2' object using dot notation.
var placed = person2.place; // This assigns the value associated with the 'place' key ("Nandyal") to the variable 'placed'.
console.log(placed); // This prints the value of 'placed', which is "Nandyal".
