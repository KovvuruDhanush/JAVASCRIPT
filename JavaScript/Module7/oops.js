// Object-Oriented Programming (OOP) is a programming paradigm that focuses on organizing code around objects, which are instances of classes or prototypes.
// OOP aims to structure code in a way that models real-world entities and their relationships.

// Four Pillars of OOP:

// 1. Encapsulation: Bundling data (attributes) and methods (functions) that operate on the data into a single unit, known as a class. It allows data to be accessed and manipulated only through well-defined interfaces.
// Encapsulation Example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

// 2. Abstraction: Hiding complex implementation details and showing only essential features of an object. Abstraction helps in simplifying the interaction with objects by providing a clear interface.
// Abstraction Example:
class PaymentGateway {
    processPayment(amount) {
        // Code to process the payment abstracted away
        console.log(`Processing payment of $${amount}`);
    }
}

// 3. Polymorphism: The ability of different objects to respond to the same method in their own unique way. Polymorphism allows for flexible and dynamic behavior based on the specific object's implementation.
// Polymorphism Example:
class Shape {
    draw() {
        console.log("Drawing a shape.");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle.");
    }
}

// 4. Inheritance: The mechanism by which a class inherits properties and behaviors from a parent class. Inheritance promotes code reuse and allows for creating specialized classes based on existing ones.
// Inheritance Example:
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Additional OOP Concepts in JavaScript:

// - `this` Keyword: Refers to the current instance of an object and is used to access its properties and methods.
// - Constructor Functions: Functions used to create objects with shared properties and methods.
// - Classes: A more modern way to create constructor functions and manage inheritance.
// - Encapsulation: Achieved by controlling access to properties and methods using private and public access specifiers.
// - Polymorphism: Achieved through method overriding and dynamic method resolution.
// - Prototype Object: Every object in JavaScript has a prototype object that provides shared properties and methods.
// - Prototypal Inheritance: Objects inherit properties and methods directly from other objects.

// You can use the above concepts to write object-oriented code in JavaScript, even though JavaScript's OOP is based on prototypes rather than traditional classes.
