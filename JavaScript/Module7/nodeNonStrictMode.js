console.log(this); // In non-strict mode, this will refer to the global object (window in a browser context).

function add() {
    console.log(this);
}
add(); // When calling add as a standalone function, this will again refer to the global object.

let myObj = {
    name: 'Dhanush',
    age: 20,
    myFn: function() {
        console.log(this);
    }
};

myObj.myFn(); // Inside the method myFn, this refers to the object myObj.

let myObj1 = {
    name: 'Dhanush',
    age: 20,
    myFn2: function() {
        function myFn3() {
            console.log(this);
        }
        myFn3();
    }
};

myObj1.myFn2(); // Inside myFn3, this will again refer to the global object.


// Explanation:

// The first console.log(this) is outside of any specific function or object context. In non-strict mode, this refers to the global object (window in a browser context or global in Node.js).

// Inside the add function, when it is called as a standalone function, this again refers to the global object.

// In the myObj object, the method myFn is defined. When myObj.myFn() is called, this refers to the myObj object. This is because the function is a method of the object, so when it's called using the dot notation, this is bound to the object.

// In the myObj1 object, the method myFn2 is defined. Inside this method, there's another function myFn3. When myFn3() is called, this refers again to the global object. This is because myFn3 is not called as a method of any object; it's called as a standalone function.

// In JavaScript, the value of this is determined by how a function is called. It can vary depending on whether a function is called as a method of an object, as a standalone function, in the context of a callback, or within different scopes. Understanding the context in which a function is called is crucial to correctly understanding the value of this.




