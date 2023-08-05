// Promises mean commitment.
// Promises have three stages: pending, fulfilled, and rejected.
// At the end, they reach the settled stage.

// How to construct a Promise.
let myPromise = new Promise(function(resolve, reject) {
    const a = 7;
    const b = 5;
    setTimeout(() => {
        if (a === b) {
            resolve('The values are equal.');
        } else {
            reject('The values are not equal.');
        }
    }, 2000); // Simulating an asynchronous operation
});

// Using .then() and .catch() to handle Promise states.

// The .then() method is used for the fulfilled state.
myPromise.then(function(result) {
    console.log(result);
});

// The .catch() method is used for the rejected state.
myPromise.catch(function(failed) {
    console.log(failed);
});
























// Explanation:

// You've described the stages of a Promise: pending (initial), fulfilled (resolved), and rejected.

// The code defines a myPromise variable that holds a new Promise. Inside the Promise constructor, you're using a setTimeout to simulate an asynchronous operation that resolves or rejects after 2 seconds.

// The .then() method is used to handle the fulfillment of the Promise. When the asynchronous operation is completed and the Promise is fulfilled, the callback function provided to .then() is executed.

// The .catch() method is used to handle the rejection of the Promise. If the asynchronous operation results in a rejection, the callback function provided to .catch() is executed.

// In your example, since a and b are not equal, the Promise will be rejected and the .catch() callback will execute, logging "The values are not equal."

// Promises provide a structured and organized way to handle asynchronous operations, making the code more readable and maintainable compared to deeply nested callbacks. Additionally, Promises offer a straightforward mechanism for error handling through the .catch() method.



