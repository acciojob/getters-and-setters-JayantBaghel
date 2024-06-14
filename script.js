// Define the Person class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for the name property
    get name() {
        return this._name;
    }

    // Setter for the age property
    set age(age) {
        this._age = age;
    }

    // Getter for the age property to allow access to it
    get age() {
        return this._age;
    }
}

// Define the Student class that extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
