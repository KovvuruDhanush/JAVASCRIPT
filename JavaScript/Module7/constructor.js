function createCar(_name, _company, _color) {
    // When this function is invoked with 'new', 'this' points to an empty object.

    this.name = _name;
    // 'this' refers to the object being created.
    // A new property 'name' is created on the object and assigned the value of '_name'.

    this.company = _company;
    // Another property 'company' is created on the object and assigned the value of '_company'.

    this.color = _color;
    // Similarly, a property 'color' is created on the object and assigned the value of '_color'.

    this.drive = function () {
        // This is a method attached to the object.
        // Inside this method, 'this' refers to the object calling the method.
        console.log(`I am driving ${this.name} and it is of ${this.color} color.`);
    }
}

// Creating a new object using the 'createCar' constructor function
let car1 = new createCar('x4', 'BMW', 'RED');
// The 'new' keyword creates a new object, and the constructor function is invoked with 'this' pointing to that object.

console.log(car1); // Output: { name: 'x4', company: 'BMW', color: 'RED', drive: [Function] }
// The 'car1' object now has properties 'name', 'company', and 'color', along with the 'drive' method.

car1.drive(); // Output: I am driving x4 and it is of RED color.
// The 'drive' method is invoked on the 'car1' object, and within the method, 'this' refers to the 'car1' object.
