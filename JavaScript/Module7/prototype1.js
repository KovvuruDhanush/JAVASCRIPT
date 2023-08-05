function person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

// Adding a method to the prototype of the person constructor.
person.prototype.getNameAndAge = function() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
};

// Creating instances of the person constructor.
let person1 = new person('Dhanush', 20);
let person2 = new person('Steve', 20);

// Both person1 and person2 instances share the same method from the prototype.

console.log(person1);
console.log(person2);

// Calling the shared method.
person1.getNameAndAge();
person2.getNameAndAge();














// Explanation:

// You've defined a constructor function person that takes _name and _age as parameters and assigns them to properties name and age using this.

// You've extended the prototype of the person constructor by adding a method called getNameAndAge to it. This method will be shared among all instances created using the person constructor.

// You've created two instances, person1 and person2, using the person constructor.

// Both person1 and person2 instances share the same prototype, which contains the getNameAndAge method.

// You've printed the instances to the console to see their properties.

// You've called the shared method getNameAndAge on both instances. This demonstrates how the method is shared among all instances and can be reused without repeating the method definition.

// By adding methods to the prototype of constructor functions, you ensure that all instances created using that constructor share the same method without duplicating its code. This not only adheres to the DRY principle but also optimizes memory usage since the method is stored in the prototype rather than being duplicated for each instance.




