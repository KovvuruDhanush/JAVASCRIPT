console.log('before');

function greet() {
    console.log('Hello from setTimeout');
}

// Using setTimeout to schedule the execution of the greet function after 5000 milliseconds (5 seconds).
setTimeout(greet, 5000);

console.log('after');












// You're using the console.log function to print "before" to the console.

// The greet function is defined to log "Hello from setTimeout" to the console.

// The setTimeout function takes two arguments: a callback function (greet in this case) and a time delay in milliseconds (5000 milliseconds or 5 seconds).

// Despite the delay, the program doesn't pause at this point. It moves on to the next line of code while the setTimeout is counting down.

// You then use console.log again to print "after" to the console.

// After the initial delay of 5 seconds, the callback function greet is executed, logging "Hello from setTimeout" to the console.

// The output of this code will be:

// javascript
// Copy code
// before
// after
// Hello from setTimeout







