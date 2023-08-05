let person1 = {
    firstName: 'kovvuru',
    lastName: 'Dhanush',
    age: 21
};

let printDetails = function (city, power) {
    console.log(`hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old. I am from ${city} and my power is ${power}`);
};

let person2 = {
    firstName: 'yerra',
    lastName: 'Rahul',
    age: 21,
    message: 'rahulooverboy' // Adding a message property
};

// Using 'call' method to pass arguments individually
printDetails.call(person2, 'New York', 'Iron Man');

// Using 'apply' method to pass an array of arguments
printDetails.apply(person2, ['New York', 'Iron Man']);

// Using 'bind' method to create a new function with bound context and arguments
let myFn = printDetails.bind(person2, 'New York', 'Iron Man');

// Calling the bound function to execute it
myFn();
