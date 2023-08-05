// Define a base class Animal with a common method sound().
class Animal {
    sound() {
        console.log(`Animals make different sounds`);
    }
}

// Define a Dog class that overrides the sound() method.
class Dog {
    sound() {
        console.log(`Dog barks`);
    }
}

// Define a Cat class that also overrides the sound() method.
class Cat {
    sound() {
        console.log(`Cat meows`);
    }
}

// Create instances of the classes.
let animal1 = new Animal();
let tommy = new Dog();
let percy = new Cat();

// Call the sound() method on each instance.
tommy.sound(); // Outputs: Dog barks
animal1.sound(); // Outputs: Animals make different sounds
percy.sound(); // Outputs: Cat meows
