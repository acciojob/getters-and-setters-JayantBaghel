class Person {
    constructor(name, age) {
        this._name = name; // Use an underscore to indicate a private property
        this._age = age;   // Use an underscore to indicate a private property
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}

// Define the Student class as a subclass of Person
class Student extends Person {
    // Method to log that the student is studying
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class as a subclass of Person
class Teacher extends Person {
    // Method to log that the teacher is teaching
    teach() {
        console.log(`${this.name} is teaching`);
    }
}