// Define the base class Person with a constructor that initializes name and age.
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}

// Define the Teacher class that extends Person. It has an additional property classStrength.
class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        // Call the parent class constructor using super to inherit name and age properties.
        super(_name, _age);
        this.classStrength = _classStrength;
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

// Print the teacher and person objects to the console.
console.log(teacher1);
console.log(person1);
