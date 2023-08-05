let myObj = {};

// You've created an empty object named myObj.
// All objects in JavaScript have a prototype chain that includes methods and properties from the Object prototype.

console.log(myObj);

let person = {
    name: "Dhanush",
    age: 19
};

console.log(person);
console.log(person.hasOwnProperty('name'));
// The hasOwnProperty method is used to check if an object has a specific property.
// In this case, you're checking if the person object has a property called 'name'.
// It returns true because 'name' is indeed a property of the person object.

// Constructor Function

function Person3(_name, _age) {
    this.name = _name;
    this.age = _age;
}

let person2 = new Person3('Steve', 14);
console.log(person2);






// Explanation:

// You've created an empty object myObj. When you create an object, it automatically inherits properties and methods from the Object prototype.

// The person object has properties name and age. It's a plain object and inherits properties and methods from the Object prototype.

// You've used the hasOwnProperty method to check if the person object has a property called 'name'. Since 'name' is indeed a property of the person object, person.hasOwnProperty('name') returns true.

// You've defined a constructor function Person3 that takes _name and _age as parameters and assigns them to properties name and age using this.

// You've created an instance of Person3 named person2. When you create an object using a constructor function, it inherits properties and methods from both the specific constructor's prototype (Person3.prototype) and the general Object prototype.

// In JavaScript, objects are linked to their prototypes, forming a prototype chain. This chain allows objects to inherit properties and methods from their prototype objects, which can be specific to the constructor function they were created with or more general like those in the Object prototype. This system allows for code reusability and efficient memory usage.