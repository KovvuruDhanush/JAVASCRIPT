// Define a function named 'test'.
function test() {
    let a = 2; // Declare a variable 'a' and assign the value 2 to it.

    // Define another function named 'test1' within the 'test' function.
    function test1() {
        console.log(a); // This inner function has access to the variable 'a' due to closure.
    }

    // Return the inner function 'test1' from the 'test' function.
    return test1;
}

// Call the 'test' function and store the returned function 'test1' in the variable 'fun'.
let fun = test();

// Print the value of the variable 'fun' to the console.
console.log(fun); // 'fun' now holds the reference to the 'test1' function.

// Call the function stored in the variable 'fun'.
fun(); // This execution will log the value of 'a' (which is 2) to the console.

// Explanation:

// 1. The 'test' function is defined.
//    - Inside 'test', a local variable 'a' is declared and assigned the value 2.

// 2. The inner function 'test1' is defined within the 'test' function.
//    - This inner function has access to the variables in its containing scope due to closures.
//    - It can access the variable 'a' even after the 'test' function completes execution.

// 3. The 'test1' function is returned from the 'test' function.
//    - This means that 'test1' carries with it the closure over the 'test' function's scope.

// 4. The 'test' function is invoked, and the returned function 'test1' is stored in the variable 'fun'.

// 5. The value of 'fun' (which is a reference to the 'test1' function) is printed to the console.

// 6. The 'fun' function is called.
//    - This execution logs the value of the variable 'a' (which is 2) to the console.
//    - Even though 'test' function has completed execution, 'test1' retains access to its scope (closure).

// Closures allow inner functions to remember the variables and scope of their containing functions,
// even after those containing functions have finished executing.

// Output of the console.log(fun) will show a reference to the 'test1' function.
// Output of the fun() call will log the value 2 to the console.
