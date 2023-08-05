'use strict'
// console.log(this)
// //here you're getting window object


// function add()
// {
//     console.log(this)
// }
// add()

//when you are in strict mode you're getting a output as undefined right! check this
//function->undefined


let myObj = {
    name: 'Dhanush',
    age: 23,
    myFn1: function () {
        console.log(this)
        
    }
}

myObj.myFn1()

// obj->fn->object itself


let myObj1 = {
    name: 'Dhanush',
    age: 20,
    myFn2:function() {
        function myFn3() {
            console.log(this)

        }
        myFn3()
    }
    
}
myObj1.myFn2()
//obj->fn->fn=>here you are getting as undefined