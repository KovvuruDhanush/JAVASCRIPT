// Exploring the behavior of 'this' in different contexts

// Global Scope
console.log(this); // Refers to the global object, which is the window object in browsers.

// Standalone Function
function add() {
    console.log(this); // In a standalone function, 'this' also refers to the global object.
}
add();

// Method within an Object
let myObj = {
    name: 'Dhanush',
    age: 23,
    myFn1: function () {
        console.log(this); // Inside a method, 'this' refers to the object that the method is a part of.
    }
};
myObj.myFn1();

// Nested Function
let myObj1 = {
    name: 'Dhanush',
    age: 20,
    myFn2: function () {
        function myFn3() {
            console.log(this); // Inside nested function myFn3, 'this' again refers to the global object.
        }
        myFn3();
    }
};
myObj1.myFn2();

// Summary:
// - In global scope and standalone functions, 'this' refers to the global object (window in browsers).
// - In methods, 'this' refers to the object that the method is a part of.
// - In nested functions that are not methods, 'this' still refers to the global object.
