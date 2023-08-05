const fs = require('fs');

console.log('before');

fs.readFile('f1.txt', cb1);

function cb1(err, data) {
    if (err) {
        console.log(err);
        // If the file doesn't exist, it returns an error
    }
    console.log(data.toString()); // Convert Buffer to a string and print
    fs.readFile('f2.txt', cb2);
}

function cb2(err, data) {
    if (err) {
        console.log(err);
        // If the file doesn't exist, it returns an error
    }
    console.log(data.toString()); // Convert Buffer to a string and print
    fs.readFile('f3.txt', cb3);
}

function cb3(err, data) {
    if (err) {
        console.log(err);
        // If the file doesn't exist, it returns an error
    }
    console.log(data.toString()); // Convert Buffer to a string and print
}

console.log('after');





// xplanation:

// You're using the fs module to read files asynchronously in the Node.js environment.

// The functions cb1, cb2, and cb3 are used as callback functions for handling the results of reading each file.

// When fs.readFile is called, it triggers an asynchronous operation to read the file. Once the operation is complete, the callback function is executed.

// Inside each callback, you're checking for errors, and if there are none, you're converting the data from a Buffer to a string using data.toString() and printing it.

// The event loop ensures that asynchronous operations are executed when the call stack is empty. This is why the "before" and "after" log statements appear before the results of the file reads.

// The order of execution might not be deterministic for asynchronous operations. The event loop and callback queue play a role in determining which callback gets executed first.

// To achieve a serial execution of asynchronous operations, you would typically use techniques like callbacks, Promises, or the async/await syntax.

// In your example, the output might not be in the same order as you've written the callbacks due to the nature of asynchronous execution. To ensure a specific order, you can use callback chaining or other asynchronous control flow mechanisms.