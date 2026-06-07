// Callback Functions

// Definition:
// A callback is a function passed as an argument to another function and executed after some operation.

// Why Use Callback Functions?
// Callbacks let you run code after an async operation finishes or customize behavior by passing different functions.

// Where Is It Used?
// Event handlers, timers, I/O operations, array methods, and asynchronous APIs.

// Syntax
// function doSomething(data, callback) {
//     // do work
//     callback(result);
// }

// Beginner Example (Synchronous Callback)
function greetUser(name, callback) {
    const message = `Hello ${name}`;
    callback(message);
}

greetUser('Riya', function (msg) {
    console.log(msg);
});
// Output: Hello Riya

// Real-Time Example (Asynchronous callback with setTimeout)
function fetchData(callback) {
    // emulate async operation
    setTimeout(() => {
        const data = { id: 1, name: 'Product' };
        callback(data);
    }, 100);
}

fetchData(function (result) {
    console.log('Fetched:', result);
});
// Output (after ~100ms): Fetched: { id: 1, name: 'Product' }

// Synchronous Callback
function operate(a, b, operation) {
    return operation(a, b);
}

const multiply = (x, y) => x * y;
console.log(operate(3, 4, multiply)); // Output: 12

// Asynchronous Callback
// Many Node.js APIs use callbacks to return results after I/O.
// Example above (`fetchData`) shows a simple async callback using `setTimeout`.

// Callback Parameters
// The function that receives the callback decides what parameters to pass when calling it. The callback should accept those parameters.

// Passing Functions as Arguments
function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}

repeat(3, i => console.log('Iteration', i));
// Output:
// Iteration 0
// Iteration 1
// Iteration 2

// Returning Callbacks (Higher-order function)
function makeMultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const timesFive = makeMultiplier(5);
console.log(timesFive(4)); // Output: 20

// Common Mistakes
// - Not handling errors in async callbacks (use error-first callbacks or promises).
// - Deep callback nesting ("callback hell"). Prefer Promises / async-await for clearer flow.
// - Passing the result of a function call instead of the function itself (e.g., `doSomething(callback())` vs `doSomething(callback)`).
