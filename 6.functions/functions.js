// Introduction to Functions

// 1. What is a Function?
// Definition:
// A function is a reusable block of code that performs a specific task. Functions can take inputs, run code, and optionally return a value.
// Why Use It?
// Functions let us break programs into smaller pieces, reuse logic, and make code easier to read and maintain.
// Where Is It Used?
// Anywhere you need to perform a task multiple times or organize code: UI handlers, calculations, data processing, utilities, etc.

// Syntax:
// function functionName(parameter1, parameter2) {
//     // function body
//     return value; // optional
// }

// Beginner Example
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Real-Time Example
// Calculate final price after discount
function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}
console.log(calculateDiscountedPrice(1000, 10)); // Output: 900

// Function Components
// - `function` keyword: starts a function declaration
// - function name: identifier used to call the function
// - parameters: named placeholders for inputs
// - function body: the code that runs
// - return statement: sends a value back to the caller

// Parameters vs Arguments
// - Parameters are the names listed in the function definition (e.g., `a`, `b`)
// - Arguments are the actual values passed when calling the function (e.g., `add(2, 3)`)

// How Functions Improve Code Reusability
// Write logic once and call it many times with different inputs.

// How Functions Improve Maintainability
// Isolate behavior in one place so changes only need to be made once.

// Function Execution Flow & Invocation
// When you call a function, execution jumps to the function body, runs its statements, then returns.
// Example:
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('Asha')); // Output: Hello Asha

// Returning Values
// A function can return a value using `return`. If no return is used, the function returns `undefined`.
function noReturnExample() {
    const x = 2 + 2;
}
console.log(noReturnExample()); // Output: undefined

// Functions Returning Multiple Values
// JavaScript functions can only return one value, but you can return an object or array to return multiple values.
function computeStats(numbers) {
    const sum = numbers.reduce((s, n) => s + n, 0);
    const avg = sum / numbers.length;
    return { sum: sum, average: avg };
}
console.log(computeStats([2, 4, 6])); // Output: { sum: 12, average: 4 }

// Scope Basics
// - Global scope: variables defined outside functions are accessible everywhere.
// - Local (function) scope: variables defined inside a function are only accessible inside that function.

// Local Variables
function localExample() {
    let message = 'I am local';
    return message;
}
console.log(localExample()); // Output: I am local
// console.log(message); // Error if uncommented: message is not defined

// Global Variables
let globalValue = 10;
function useGlobal() {
    return globalValue + 5;
}
console.log(useGlobal()); // Output: 15

// Best Practices
// - Use descriptive function names (e.g., `calculateTotal` instead of `doIt`).
// - Keep functions small and focused (single responsibility).
// - Use parameters to control behavior rather than relying on globals.
// - Prefer `const` and `let` over `var` to avoid hoisting pitfalls.
// - Document expected inputs and outputs in comments.

// Common Mistakes
// - Redeclaring variables and causing shadowing or errors
// - Relying heavily on global variables
// - Not returning values when needed
// - Confusing parameters and arguments

// Interview Questions (examples)
// Q: What is the difference between function declaration and function expression?
// A: Declarations use `function name(){}` and are hoisted. Expressions assign a function to a variable and are not hoisted.

// Q: What does it mean that functions are first-class citizens in JavaScript?
// A: Functions can be stored in variables, passed as arguments, and returned from other functions.

// Real-Time Examples
// 1. Event handler
function onButtonClick(event) {
    console.log('Button clicked', event);
}
// 2. Utility function used across modules
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}
console.log(formatCurrency(12.5)); // Output: $12.50
// Summary: Functions are the main building blocks for organizing logic. Keep them named, small, and well-documented.

// Additional examples and reminders merged from `function.js`

// Basic function declaration examples
function greet() {
    console.log('Hello World');
}
greet(); // Output: Hello World

function sendOTP() {
    console.log('OTP Sent Successfully');
}
sendOTP(); // Output: OTP Sent Successfully

// Why use functions — short demonstration
console.log('Without Function:');
console.log('Welcome');
console.log('Welcome');
console.log('Welcome');

console.log('With Function:');
function welcome() {
    console.log('Welcome');
}
welcome(); // Output: Welcome
welcome(); // Output: Welcome
welcome(); // Output: Welcome

// Real-time e-commerce discount example (merged and clarified)
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}
console.log(calculateDiscount(1000, 10)); // Output: 900
console.log(calculateDiscount(2000, 20)); // Output: 1600

// Types of functions (short list)
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function
// 5. Callback Function

// Feature table (concise)
// | Feature            | Explanation                       |
// | ------------------ | --------------------------------- |
// | Reusable           | Write once, use many times        |
// | Organized          | Makes code clean                  |
// | Easy Maintenance   | Easy to update                    |
// | Reduces Repetition | Avoid duplicate code              |
// | Modular            | Breaks program into smaller parts |
