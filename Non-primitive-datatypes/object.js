// What are Objects in JavaScript?
// Objects are collections of key-value pairs used to group related data and behavior.
// Why do we use Objects?
// They model real-world entities, reduce separate variables, and encapsulate related logic.
// Where we use Objects in real projects?
// Configs, API responses, models, component props, state objects, and more.

// Syntax
let exampleObject = { key: 'value' };

// Simple example
{
    let person = {
        firstName: 'Saai',
        lastName: 'Nikhil',
        age: 25,
        isStudent: true,
        courses: ['Java', 'Python', 'C++'],
        sayHello: function () {
            console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
        }
    };
    // Output
    person.sayHello(); // Hello, my name is Saai Nikhil
    // Explanation: `person` groups related properties and a method; `this` refers to the object.
}

// Objects vs Primitive Data Types
// Objects are reference types (stored and passed by reference); primitives are copied by value.
{
    let a = { v: 1 };
    let b = a;
    b.v = 2;
    console.log(a.v); // 2 (reference behavior)
}

// Creating Objects
// Syntax
let o1 = { name: 'x' };
let o2 = new Object();
o2.name = 'y';

// Accessing Object Properties
// Dot Notation
{
    let obj = { name: 'Arya' };
    console.log(obj.name); // Arya
}

// Bracket Notation
{
    let obj = { 'first-name': 'Tyrion' };
    console.log(obj['first-name']); // Tyrion
}

// Adding Properties
{
    let u = {};
    u.age = 30;
    console.log(u.age); // 30
}

// Updating Properties
{
    let u = { age: 20 };
    u.age = 21;
    console.log(u.age); // 21
}

// Deleting Properties
{
    let u = { name: 'Jon', mark: 90 };
    delete u.mark;
    console.log(u.mark); // undefined
}

// Nested Objects
{
    let data = { user: { name: 'Sam', address: { city: 'Winterfell' } } };
    console.log(data.user.address.city); // Winterfell
}

// Objects inside Arrays
{
    let arr = [ { id:1 }, { id:2 } ];
    console.log(arr[1].id); // 2
}

// Arrays inside Objects
{
    let obj = { tags: ['js','node'] };
    console.log(obj.tags[0]); // js
}

// Object Methods
{
    let calculator = {
        add(a, b) { return a + b; }
    };
    console.log(calculator.add(2,3)); // 5
}

// `this` keyword in Objects
{
    let obj = {
        name: 'Bran',
        show() { console.log(this.name); }
    };
    obj.show(); // Bran
}

// Object.keys(), Object.values(), Object.entries()
{
    const profile = { name: 'S', age: 28 };
    console.log(Object.keys(profile)); // [ 'name', 'age' ]
    console.log(Object.values(profile)); // [ 'S', 28 ]
    console.log(Object.entries(profile)); // [ ['name','S'], ['age',28] ]
}

// Object.freeze() and Object.seal()
{
    const a = { x:1 };
    Object.freeze(a);
    a.x = 2; // no effect
    console.log(a.x); // 1

    const b = { y:1 };
    Object.seal(b);
    b.y = 2; // allowed
    // b.z = 3; // not allowed: cannot add new prop
    console.log(b.y); // 2
}

// Destructuring Objects
{
    const user = { name: 'D', age: 40 };
    const { name, age } = user;
    console.log(name, age); // D 40
}

// Spread Operator with Objects
{
    const a = { x:1 };
    const b = { ...a, y:2 };
    console.log(b); // { x:1, y:2 }
}

// Object.assign()
{
    const target = { a:1 };
    const source = { b:2 };
    Object.assign(target, source);
    console.log(target); // { a:1, b:2 }
}

// Optional Chaining
{
    const profile = { name: 'A' };
    console.log(profile?.address?.city); // undefined (no error)
}

// for...in loop
{
    const o = { a:1, b:2 };
    for (let k in o) {
        console.log(k + ':' + o[k]);
    }
}

// Object Cloning: Shallow Copy vs Deep Copy
{
    const original = { a: 1, nested: { x: 1 } };
    const shallow = { ...original };
    shallow.nested.x = 2;
    console.log(original.nested.x); // 2 (shallow copy shares nested ref)

    // Deep copy (simple JSON approach)
    const deep = JSON.parse(JSON.stringify(original));
    deep.nested.x = 5;
    console.log(original.nested.x); // still 2
}

// JSON.stringify() and JSON.parse()
{
    const obj = { name: 'R', age: 33 };
    const s = JSON.stringify(obj);
    const parsed = JSON.parse(s);
    console.log(s, parsed.name); // string and 'R'
}

// Constructor Function
{
    const Person = function(name, age) {
        this.name = name;
        this.age = age;
    };
    const p = new Person('Ctor', 20);
    console.log(p.name); // Ctor
}

// Classes and Objects
{
    class PersonClass {
        constructor(name) { this.name = name; }
        greet() { console.log('Hi ' + this.name); }
    }
    const pc = new PersonClass('Classy');
    pc.greet(); // Hi Classy
}

// Factory Functions
{
    const createUser = function(name) { return { name, say() { console.log(name); } }; };
    const u = createUser('F');
    u.say(); // F
}

// Prototypes & Prototype Inheritance
{
    const Animal = function(name) { this.name = name; };
    Animal.prototype.speak = function() { console.log(this.name + ' speaks'); };
    const Dog = function(name) { Animal.call(this, name); };
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    const d = new Dog('Doggo');
    d.speak(); // Doggo speaks
}

// Encapsulation & OOP basics (simple patterns)
{
    // Use closures or Symbols/private fields for encapsulation in real projects.
    class Counter {
        constructor() { this._count = 0; }
        inc() { this._count++; }
        get() { return this._count; }
    }
    const c = new Counter();
    c.inc();
    console.log(c.get()); // 1
}

// Real-world Object examples
// API response, user model, config object, component props are common usages.

// Interview Questions on Objects (examples)
// Q: Difference between shallow and deep copy?
// Q: How does `this` behave in arrow vs regular functions?

// Common Mistakes Beginners Make
// - Mutating shared objects unintentionally
// - Confusing `==` and `===` when comparing object properties
// - Expecting dot notation to work with keys containing dashes (use bracket notation)

// Best Practices for Objects
// - Prefer `const` for object bindings
// - Use immutable patterns where beneficial
// - Keep objects focused (single responsibility)
// - Use `Object.freeze()` when you need immutability guarantees

// End of comprehensive Objects notes (keeps original learning style and examples)




