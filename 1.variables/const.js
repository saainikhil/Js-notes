// Title
// const - Constant variables (block scoped)
//
// Definition
// `const` declares a block-scoped variable whose value cannot be reassigned and redeclared.
// It is used for values that should not change after they are set.
//
// Syntax
// const name = value;
//
// Why We Use It
// `const` prevents accidental reassignment and makes code easier to reason about.
// Use it for configuration, fixed limits, and values that should stay constant.
//
// Where It Is Used
// API keys (not real secrets), fixed settings, default values, or references that
// should not be changed.
//
// Characteristics
// - Block-scoped
// - Cannot be reassigned after declaration
// - Must be initialized at the time of declaration
// - For objects and arrays, the binding is constant but object contents can change


// Example Usage

const valueofpi = 3.14159; // A constant value for pi
console.log(valueofpi); // Output: 3.14159

//once you assign a value to a const variable, you cannot reassign it
 valueofpi = 3.14; // This will throw an error: TypeError: Assignment to constant variable.

 //redeclaration of a const variable is also not allowed
const valueofpi = 3.1416; // This will throw an error: SyntaxError: Identifier 'valueofpi' has already been declared

//once you take variable in const immediately you should assign value to it otherwise it will throw an error
const studentname; // This will throw an error: SyntaxError: Missing initializer in const declaration

// However, for objects and arrays declared with const, you can modify their contents
const myArray = [1, 2, 3];
myArray.push(4); // This is allowed, myArray is still the same reference
console.log(myArray); // Output: [1, 2, 3, 4]

//block scope example
if (true) {
	const blockScopedVariable = 'I am block scoped';
	console.log(blockScopedVariable); // Output: I am block scoped
}	
console.log(blockScopedVariable); // This will throw an error: ReferenceError: blockScopedVariable is not defined



function demoConstFunction() {
	const insideConst = "inside function";
	console.log(insideConst);
}
demoConstFunction(); // Output: inside function
// console.log(insideConst); // ReferenceError if uncommented

// Explanation
// `insideConst` exists only inside `demoConstFunction` and cannot be used outside.


//const in objects and arrays
const myObject = { name: "karthik", age: 25 };
myObject.name = "karthik kumar"; // This is allowed, we are modifying the property of the object, not reassigning the variable
console.log(myObject); // Output: { name: "karthik kumar", age: 25 }
