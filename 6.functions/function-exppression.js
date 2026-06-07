// Function Expression

//Definition:- 
// A Function Expression is a function that is created and assigned
// to a variable. It can be anonymous or named and is executed
// using the variable name. 
// It involves assigning an anonymous function to a variable.
// Function expressions can be used as arguments to other functions, returned from functions, and can be immediately invoked.

//syntax:
let functionName = function () {
    //code to be executed
}
// why we use it?
// 1. Can be anonymous
// 2. Can be used as arguments
// 3. Can be returned from functions
// 4. Can be immediately invoked

// where used?
// 1. Callbacks
// 2. Event handlers
// 3. IIFE (Immediately Invoked Function Expressions)

//example
let add = function (a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

//example
const welcomeUser = function (name) {
    return "Welcome " + name;
};
console.log(welcomeUser("sathvik")); // Output: Welcome sathvik


// Named Function Expression
// Function expressions can be anonymous or named.
// Anonymous Function Expression
const sub = function (a, b) {
    return a - b;
};
// Named Function Expression
const mul = function sum(a, b) {
    return a * b;
};
// Why Use Named Function Expressions?
// Better debugging
// Function name appears in error messages


// Hoisting Behavior (Very Important)
// This is one of the biggest differences between Function Declaration and Function Expression.
// Function Declarations are hoisted, meaning they can be called before they are defined in the code.
// Function Expressions are not hoisted, so they cannot be called before they are defined.
// example of hoisting with function expression

// Function Expression
// Does NOT work before initialization.

sayHello();
let sayHello = function () {
    console.log("Hello");
};  // Output: Uncaught ReferenceError: Cannot access 'sayHello' before initialization
//because variable is hoisted but not the function expression.



//variable reassignment example
let greet = function (name) {
    return `Hello ${name}`;
};
console.log(greet("bharath")); // Output: Hello bharath
greet = function (name) {
    return `Hi ${name}`;
};
console.log(greet("harsha")); // Output: Hi harsha
// We can reassign the variable to a new function expression, allowing for dynamic behavior.


//function expression can be passed as an argument to another function
function processUser(callback) {
    callback();
}
processUser(function () {
    console.log("User Processed");
}); // Output: User Processed
// Here, we are passing an anonymous function as a callback to the processUser function, which is a common use case for function expressions.


//function expression can be returned from another function
function createGreeting() {
    return function (name) {
        return "Hello " + name;
    };
}
const hello = createGreeting();
console.log(hello("sai")); // Output: Hello sai
// In this example, the createGreeting function returns a function expression that takes a name as an argument and returns a greeting message. We can then call the returned function with different names to get personalized greetings.


//comparing function declaration and function expression
// | Feature            | Function Declaration | Function Expression |
// | ------------------ | -------------------- | ------------------- |
// | Has name           | Yes                  | Optional            |
// | Hoisted            | Yes                  | No                  |
// | Can be anonymous   | No                   | Yes                 |
// | Stored in variable | No                   | Yes                 |
// | Used in callbacks  | Less common          | Very common         |