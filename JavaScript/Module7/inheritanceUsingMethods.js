// Define the base class Person with a constructor that initializes name and age.
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    // Define a method demo() that prints a greeting using the person's name.
    demo() {
        console.log(`Hello ${this.name}`);
    }
}

// Define the Teacher class that extends Person. It has an additional property classStrength.
class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        // Call the parent class constructor using super to inherit name and age properties.
        super(_name, _age);
        this.classStrength = _classStrength;
    }

    // Define a method test() that calls the demo() method of the parent class using super.
    test() {
        super.demo();
    }
}

// Define the Student class that extends Person. It has an additional property cgpa.
class Student extends Person {
    constructor(_name, _age, _cgpa) {
        // Call the parent class constructor using super to inherit name and age properties.
        super(_name, _age);
        this.cgpa = _cgpa;
    }
}

// Create an instance of the Student class.
let person1 = new Student("KOVVURU DHANUSH", 20, 9.28);

// Create an instance of the Teacher class.
let teacher1 = new Teacher('KOVVUR DHANUSH', 20, 'Pradeep Sir');

// Call the test() method of teacher1, which in turn calls the demo() method from the base class Person.
teacher1.test();

// Print the teacher and person objects to the console.
console.log(teacher1);
console.log(person1);


// The Person class is defined with a constructor that initializes the name and age properties.

// Inside the Person class, a method demo() is defined that prints a greeting using the person's name.

// The Teacher class extends the Person class. It inherits the properties from the parent class and adds an additional property classStrength.

// The Teacher class defines a method test() that calls the demo() method of the parent class using the super keyword. This demonstrates how methods from the base class can be accessed and invoked in the derived class.

// The Student class extends the Person class and adds the cgpa property.

// Instances of Teacher and Student classes are created.

// The test() method of teacher1 is called, which triggers the demo() method inherited from the base class Person. This shows how methods from the base class can be used in derived classes.

// Finally, the objects teacher1 and person1 are printed to the console, showing their properties and the results of method invocations.