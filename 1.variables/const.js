// Title
// const - Constant variables (block scoped)
//
// Definition
// `const` declares a block-scoped variable whose value cannot be reassigned.
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
//
// Scope Explanation
// 1. What is Scope? Definition
// Scope tells us where a variable or constant can be used in code.
//
// 2. Why Scope is Important
// Good scope rules prevent accidental access or modification and make code safer.
//
// 3. Real-life analogy
// Think of scope like labeled boxes: a constant inside a box is only available when
// you open that box.
//
// 4. Global Scope Definition
// A global constant is declared outside functions and blocks and is available
// everywhere in the program.
//
// 5. How the variable behaves when declared globally
// A `const` declared globally can be read from any function or block but cannot
// be reassigned.
//
// 6. Example
const GLOBAL_CONST = "I am global";
function readGlobalConst() {
	console.log(GLOBAL_CONST);
}
readGlobalConst();
// Output
// I am global
// 7. Explanation
// The function can access `GLOBAL_CONST` because it was declared globally.
//
// 8. Function Scope Definition
// A constant declared inside a function exists only inside that function.
//
// 9. Explain whether the variable can be accessed outside the function
// A `const` declared inside a function cannot be accessed from outside the function.
//
// 10. Example
function demoConstFunction() {
	const insideConst = "inside function";
	console.log(insideConst);
}
demoConstFunction();
// console.log(insideConst); // ReferenceError if uncommented
// Output
// inside function
// 11. Explanation
// `insideConst` exists only inside `demoConstFunction` and cannot be used outside.
//
// 12. Block Scope Definition
// `const` is block-scoped: a constant declared inside { } is visible only inside
// that block.
//
// 13. Explain whether the variable can be accessed outside the block
// A `const` declared inside an if/for block cannot be accessed outside that block.
//
// 14. Example
if (true) {
	const blockConst = "inside block";
	console.log(blockConst);
}
// console.log(blockConst); // ReferenceError if uncommented
// Output
// inside block
// 15. Explanation
// The `blockConst` is not available outside the if-block because `const` enforces block scope.
//
// Reassignment
// Not allowed. Trying to assign a new value to a `const` variable throws an error.
//
// Redeclaration
// You cannot redeclare the same `const` name in the same block.
//
// Hoisting Behavior
// `const` is hoisted but not usable before declaration (temporal dead zone).
//
// Comparison with Other Variable Types
// - `let`: can be reassigned.
// - `var`: function-scoped and can be redeclared.
// Use `const` for values that must not change.
//
// Examples

// Example 1: const basic
const TAX_RATE = 0.1; // declare a constant for tax rate
console.log("Tax rate:", TAX_RATE);
// Output
// Tax rate: 0.1

// Example 2: cannot reassign
const id = 123;
console.log(id); // 123
// id = 456; // TypeError if uncommented: Assignment to constant variable.

// Example 3: const with object (binding is constant, properties can change)
const product = { name: "Shirt", price: 500 };
console.log(product.name, product.price); // show initial values
// Output
// Shirt 500
product.price = 450; // modify a property - allowed
console.log(product.price);
// Output
// 450
// Explanation: the `product` reference cannot be reassigned, but its internal properties can change.

// Real-world example: application config
const APP_NAME = "ShopEasy"; // app name should not change during runtime
console.log("App:", APP_NAME);
// Output
// App: ShopEasy

// Notes for beginners:
// - Prefer `const` by default. Use `let` when you need to change a variable.
// - Avoid `var` for new code.
