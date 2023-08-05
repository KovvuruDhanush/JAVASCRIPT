// Defining a class named 'Person'
class Person {
    constructor(_name, _age) {
        // Constructor method is called when an object of the class is created.
        // It initializes the properties of the object.

        // 'this' refers to the object being created.
        this.name = _name;
        this.age = _age;
    }

    // Defining a method within the class
    welcome() {
        // 'this' still refers to the object on which the method is called.
        console.log('Jai Balayya');
    }
}

// Creating an instance (object) of the class
let person1 = new Person("DHANUSH KOVVURU", 20);

// Accessing the properties of the object
console.log(person1.name); // Output: DHANUSH KOVVURU
console.log(person1.age);  // Output: 20

// Calling the method of the object
person1.welcome(); // Output: Jai Balayya
