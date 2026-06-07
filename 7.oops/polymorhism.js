class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a sound.');
    }
}
class Dog extends Animal {
    // Override speak to demonstrate polymorphism
    speak() {
        console.log(this.name + ' barks.');
    }
}
class Cat extends Animal {
    speak() {
        console.log(this.name + ' meows.');
    }
    paw() {
        console.log(this.name + ' uses its paw to walk');
    }
}
let dog = new Dog('dogesh');
let cat = new Cat('Kitty');

dog.speak();
// dog.sound() removed: method was renamed to `speak` for a consistent override example.
cat.speak();
cat.paw();