//Arrow function
//definition:- Arrow functions in JavaScript are a concise way to write functions using the => syntax, automatically binding this from the surrounding context.

//syntax:-
//const functionName = (parameters) => {  // function body  return result;};


// Basic example
const multiply = (a, b) => (a * b);
console.log(multiply(2, 3)); // Output: 6

// Single parameter syntax (no parentheses needed)
const square = x => x * x;
console.log(square(4)); // Output: 16

// Multiple parameters syntax
const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3)); // Output: 6

// No parameter syntax
const sayHi = () => 'Hi';
console.log(sayHi()); // Output: Hi

// Implicit return (single expression, no braces)
const double = n => n * 2;
console.log(double(5)); // Output: 10

// Explicit return (use braces and return)
const triple = n => { return n * 3; };
console.log(triple(5)); // Output: 15

// Returning objects (wrap object literal in parentheses)
const createPoint = (x, y) => ({ x: x, y: y });
console.log(createPoint(2, 3)); // Output: { x: 2, y: 3 }

// Arrow functions in arrays
const nums = [1, 2, 3, 4];

// map()
const doubled = nums.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// filter()
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce()
const sumAll = nums.reduce((acc, n) => acc + n, 0);
console.log(sumAll); // Output: 10

//Advantages of Arrow Functions
// 1. Concise Syntax: Arrow functions provide a shorter syntax compared to traditional function expressions, making them more concise and easier to read.
// 2. Lexical this: Arrow functions do not have their own this context; instead, they inherit it from the surrounding scope. This can be particularly useful when working with callbacks or methods that require access to the parent context.
// 3. Implicit Return: If the function body consists of a single expression, you can omit the curly braces and the return keyword, allowing for an implicit return of the expression's value.
// 4. No Arguments Object: Arrow functions do not have their own arguments object, which can help prevent confusion when working with nested functions or callbacks.

//why we use arrow functions?
// 1. To write more concise and readable code.