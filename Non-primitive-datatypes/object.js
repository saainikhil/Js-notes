// Objects:
// what are objects?
// Objects are non-primitive data types used to store data in key-value pairs.
// objects are mutable, meaning you can change their properties and values after they are created.
// Objects can be created using object literals, constructors, or the Object.create() method.
// objects can store any type of data, including other objects, arrays, functions, and primitive data types.


// objects syntax:

// empty object:
const emptyObject = {};
// output: {}

// literal syntax:
const person = {
    name: "sathvik",
    age: 22,
    isStudent: true,
    college: "XYZ University"
}
console.log(person);
// output: { name: 'sathvik', age: 22, isStudent: true, college: 'XYZ University' }

// to access the properties of an object, you can use dot notation or bracket notation:
// dot notation:
console.log(person.name); // output: sathvik
console.log(person.age); // output: 22

// bracket notation:
console.log(person["isStudent"]); // output: true

// to add a new property to an object, you can use dot notation or bracket notation:
// dot notation
person.gender = "male";
console.log(person.gender);
 //output: male

// bracket notation
person["hobby"] = "reading";
console.log(person)
// output: { name: 'sathvik', age: 22, isStudent: true, college: 'XYZ University', gender: 'male', hobby: 'reading' }

// to delete a property from an object, you can use the delete operator:
delete person.age;
// output: { name: 'sathvik', isStudent: true, college: 'XYZ University', gender: 'male', hobby: 'reading' }

// to update an existing property of an object
// as we already discussed, Objects are mutable, so existing property values can be changed.
person.college = "ABC University";
console.log(person.college); // output: ABC University

//accessing properties using variables
let key = "name";
console.log(person[[key]]); //output: sathvik

// to check an object length 
// object do not length property like arrays, but you can get the number of properties in an object using the Object.keys() method:
const personLength = Object.keys(person).length;    // output: 5


// looping through object properties
 for (let key in person) {
    console.log(key + ": " + person[key]);
 }
//output: 
//  name: sathvik
// isStudent: true
// college: ABC University
// gender: male
// hobby: reading


// this Keyword in Objects
// this refers to the current object.
const person = {
    name: "sathvik",
    introduce: function () {
        return "My name is " + this.name;
    }
};
console.log(person.introduce());
// Output: My name is sathvik

// to freeze an object Object.freeze()
// Prevents adding, deleting, or modifying properties.
const person = {
    name: "sathvik"
};
Object.freeze(person);
person.name = "nikhil";
console.log(person);
// Output  { name: 'sathvik' }






// to check if a property exists in an object, you can use the in operator:
console.log("name" in person); // output: true
console.log("age" in person); // output: false

// to get the keys of an object, you can use the Object.keys() method:
console.log(Object.keys(person)); // output: [ 'name', 'isStudent', 'college', 'gender', 'hobby' ]

// to get the values of an object, you can use the Object.values() method:
console.log(Object.values(person)); // output: [ 'sathvik', true, 'XYZ University', 'male', 'reading' ]

// to get the entries of an object, you can use the Object.entries() method:
console.log(Object.entries(person)); // output: [ [ 'name', 'sathvik' ], [ 'isStudent', true ], [ 'college', 'XYZ University    '], [ ' gender', 'male' ], [ 'hobby', 'reading' ] ]

// Objects can store other objects, arrays, functions, and primitive values.
// objects can store objects:
const student = {
    name: "sathvik",
    age: 22,
    grade: "A",
    address: {
        district: "anantapur",
        state: "andhra pradesh",
    }
};

// to access the properties of a nested object, you can use dot notation or bracket notation:
// dot notation:
console.log(student.address); // output: { district: 'anantapur', state: 'andhra pradesh' }
console.log(student.address.district); // output: anantapur
// bracket notation:
console.log(student["address.state"]); // output: undefined
// address.state is treated as a single property name
// Since such property does not exist, output is undefined
console.log(student["address"]["state"]); // output: andhra pradesh

// objects can store arrays:
const course = {
    name: "JavaScript",
    duration: "3 months",
    topics: ["variables", "functions", "objects", "arrays"]
};

// to access the elements of an array stored in an object, you can use dot notation or bracket notation:
// dot notation:
console.log(course) // output: { name: 'JavaScript', duration: '3 months', topics: [ 'variables', 'functions', 'objects', 'arrays' ] }
console.log(course.topics); // output: [ 'variables', 'functions', 'objects', 'arrays' ]
console.log(course.topics[0]); // output: variables
// bracket notation:
console.log(course["topics"]); // output: [ 'variables', 'functions', 'objects', 'arrays' ]
console.log(course["topics"][0]); // output: variables

// objects can store functions:
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};
// to call a function stored in an object, you can use dot notation or bracket notation:
// dot notation:
console.log(calculator.add(2, 3)); // output: 5
console.log(calculator.subtract(5, 2)); // output: 3
// bracket notation:
console.log(calculator["multiply"](2, 3)); // output: 6
console.log(calculator["divide"](6, 2)); // output: 3

