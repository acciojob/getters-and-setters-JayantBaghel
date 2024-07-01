// Person class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

// Student class
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}