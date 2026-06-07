//Function declaration
// Definition: A function declaration is a way to define a function in JavaScript using the function keyword, followed by the function name and parentheses ().
// A normal function created using the function keyword.

//Syntax
function functionName() {

}

// Why Use It?
// Most common type
// Easy to read
// Reusable

// Where Used?
// General programming
// Utilities
// Business logic

//example
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Return Statement
// Definition
// The return keyword sends a value back from a function.
// Example
function square(num) {
    return num * num;
}
let result = square(5);
console.log(result); // Output: 25

//real time example
function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}
let price = 1000;
let discount = 10;
console.log(calculateDiscount(price, discount)); // Output: 900

// Named Function
// Function declarations must have a name.
function sayHello() {
    console.log("Hello");
}
sayHello(); // Output: Hello

//We can call a function before its declaration due to HOISTING in JavaScript.
console.log(wish()); // Output: Hello World
function wish() {
    return 'Hello World';
}


// Code reusability example
function greetUser(name) {
    return `Hello ${name}`;
}
console.log(greetUser("Nikhil")); // Output: Hello Nikhil
console.log(greetUser("John")); // Output: Hello John
// Write once and use multiple times with different arguments.


// Function Parameters and Arguments
// Definition
// Parameters are variables declared in the function definition.
// Arguments are actual values passed when calling the function.

function greet(name) {  // name = parameter
    return `Hello ${name}`;
}
console.log(greet("Nikhil")); // "Nikhil" = argument
// Output: Hello Nikhil


// Function Invocation (Calling a Function)
// This is an important concept.
// Executing a function is called invoking or calling a function.
function welcome() {
    console.log("Welcome");
}
welcome(); // Function Call
//Output: Welcome

// Scope of Variables
// Variables declared inside a function cannot be accessed outside.
function localScopeExample() {
    let message = "Hello";
    console.log(message);
}
localScopeExample(); // Output: Hello
// console.log(message); // Error: message is not defined (local scope)

// Global scope example
let globalMessage = "I am global";
function showGlobal() {
    return globalMessage;
}
console.log(showGlobal()); // Output: I am global

// Best Practices for Function Declarations
// - Use clear, descriptive names (e.g., `calculateTotal`, `formatDate`).
// - Keep functions focused on a single task (single responsibility).
// - Avoid side effects: prefer returning values instead of changing globals.
// - Use `const` for variables that won't be reassigned and `let` otherwise; do not use `var`.

// Common Mistakes
// - Redeclaring the same function name in the same scope can cause confusion or unexpected behavior.
// - Relying on global variables inside functions makes code harder to test and maintain.
// - Forgetting to return values when needed (function returns `undefined`).
// - Assuming function expressions are hoisted like declarations (they are not).