// Imagine we're describing a superhero named 'cap'.
var cap = {
    firstName: 'Steve', // His first name is Steve.
    lastName: 'Rogers', // His last name is Rogers.
    age: 102, // He's 102 years old.
    friends: ['Bucky', 'Bruce', 'Tony'], // He has friends named Bucky, Bruce, and Tony.
    isAvenger: true, // He is a member of the Avengers.
    address: {
        state: 'New York', // He lives in the state of New York.
        city: {
            name: 'Brooklyn', // Specifically, he lives in Brooklyn.
            pincode: 1234 // The pincode of his area is 1234.
        }
    }
};

// Let's see who his friends are.
console.log("His friends are:", cap.friends);

// Now, let's find out who his third friend is using an index.
console.log("His third friend is:", cap.friends[2]); // The third friend is Tony.

// We'll find out the name of the city he lives in, which is inside objects within objects.
console.log("He lives in the city of:", cap.address.city.name);

// He was once an Avenger, but not anymore. Let's update that.
cap.isAvenger = false; // He's no longer an Avenger.
console.log("Is he still an Avenger?", cap.isAvenger);

// We'll add a list of movies he likes to watch.
cap.movies = ['Action Movie', 'Adventure Flick', 'Superhero Saga'];

// Time to remove his age from the description.
delete cap.age; // We're taking out his age.
console.log("Now his description is:", cap); // His age is no longer part of the description.
