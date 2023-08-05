
// Encapsulation Example

// Define a constructor function called Person
function Person(_name, _age) {
    // Private variable to store the person's name
    var name = _name;

    // Public property to store the person's age
    this.age = _age;

    // Public method to retrieve the private 'name' variable
    this.getName = function () {
        return name;
    };
}

// Create a new person object using the Person constructor
let person1 = new Person("Dhanush", 20);

// Call the public method 'getName' to access the private 'name' variable
console.log(person1.getName()); // Output: "Dhanush"
// Code Explanation:

// In the provided code example:

// We define a constructor function called Person. This constructor function serves as a blueprint for creating Person objects.
// Inside the constructor, we create a private variable named name using the var keyword. This private variable is only accessible within the function scope of the constructor. It stores the person's name, ensuring that it cannot be directly accessed from outside.
// We create a public property named age using the this keyword. This property is accessible from outside and stores the person's age.
// We define a public method named getName() using the this keyword. This method provides a way to access the private name variable's value from outside the constructor. It uses a closure to retain access to the name variable, even after the constructor has finished executing.
// We use the Person constructor to create a new person1 object. We provide "Dhanush" as the name and 20 as the age.
// We call the public method getName() on the person1 object to retrieve the private name variable's value. Since the getName() method has access to the private name variable, it can return its value, allowing controlled access to the encapsulated data.
// Use Case:

// The use case of encapsulation is to ensure that the internal state of an object remains consistent and protected from unintended modifications. By encapsulating data within objects and providing controlled methods to interact with that data, we can achieve data integrity and prevent external code from directly manipulating the internal state.

// In the code example, encapsulation ensures that the name variable is private and can only be accessed through the getName() method. This could be useful in scenarios where you want to ensure that the person's name is not modified directly from outside the object but can only be retrieved using a specified method. It helps maintain a clear interface for interacting with the object's properties and prevents accidental or malicious data manipulation.