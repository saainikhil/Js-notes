// Title
// var - Declaring variables (old style)
//
// Definition
// `var` declares a variable in JavaScript. It was the original way to create variables.
//
// Syntax
// var name = value;
//
// Why We Use It
// Used to store values that a program can read or change later. Today `var` is used less
// often because `let` and `const` are safer, but you will still see `var` in older code.
//
// Where It Is Used
// Legacy code, simple scripts, older tutorials. Avoid for new code, but understand behavior.
//
// Characteristics
// - Function-scoped (not block-scoped)
// - Can be redeclared in the same scope
// - Can be reassigned
// - Subject to hoisting (declared at top with undefined value)
//
// Scope Explanation
// 1. What is Scope? Definition
// Scope describes where a variable can be seen and used in code.
//
// 2. Why Scope is Important
// Scope helps us control access to variables and avoid mistakes like accidental
// changes from other parts of the program.
//
// 3. Real-life analogy
// Think of scope like rooms in a house. A variable is like an item kept in a room.
// Only people inside that room can use the item easily.
//
// 4. Global Scope Definition
// A global variable is declared outside any function. It is available everywhere
// in the program (all rooms can see it).
//
// 5. How the variable behaves when declared globally
// A `var` declared globally becomes a property of the global object and can be
// read or changed from any function or block.
//
// 6. Example
// Declare a global var and use it in a function
var globalVar = "I am global"; // global variable
function showGlobal() {
    console.log(globalVar);
}
showGlobal();
// Output
// I am global
// 7. Explanation
// The function can access `globalVar` because it was declared outside the function.
//
// 8. Function Scope Definition
// A function-scoped variable is declared inside a function and exists only inside
// that function (only people inside that room can use the item).
//
// 9. Explain whether the variable can be accessed outside the function
// A `var` declared inside a function cannot be accessed from outside the function.
//
// 10. Example
function demoFunctionScope() {
    var inside = "inside function"; // function-scoped
    console.log(inside);
}
demoFunctionScope();
// console.log(inside); // would cause ReferenceError if uncommented
// Output
// inside function
// 11. Explanation
// The variable `inside` is only visible inside `demoFunctionScope` and not outside.
//
// 12. Block Scope Definition
// Block scope refers to variables declared inside blocks (between { }). `var` is
// NOT block-scoped: a `var` declared inside a block is still visible outside the
// block (unlike `let` and `const`).
//
// 13. Explain whether the variable can be accessed outside the block
// A `var` declared inside an if/for block can be accessed outside that block.
//
// 14. Example
if (true) {
    var insideBlock = "visible outside"; // declared inside block with var
}
console.log(insideBlock);
// Output
// visible outside
// 15. Explanation
// Even though `insideBlock` was declared inside the if-block, `var` makes it
// available outside the block. This behavior can cause unexpected bugs, which
// is why `let` and `const` are preferred for block-level variables.
//
// Reassignment
// `var` variables can be reassigned to new values.
//
// Redeclaration
// You can declare the same `var` name again in the same scope without error.
//
// Hoisting Behavior
// Declarations made with `var` are hoisted to the top of their function or global scope.
// The variable exists from the start with the value `undefined` until assignment.
//
// Comparison with Other Variable Types
// - `let`: block-scoped, cannot be redeclared in same scope.
// - `const`: block-scoped, cannot be reassigned.
// Use `let`/`const` for modern code; learn `var` to read older examples.
//
// Examples

// Example 1: var is function-scoped
function demoVarScope() {
    // Declare with var inside function
    var a = 10; // a is available anywhere inside this function
    console.log(a); // prints the value of a
    // Output
    // 10
}
demoVarScope();

// Example 2: var redeclaration
var name = "Alice"; // declare name
var name = "Bob";   // redeclare same name (allowed with var)
console.log(name); // prints latest value
// Output
// Bob
// Explanation: the second declaration replaces the previous value.

// Example 3: var hoisting
console.log(price); // variable exists but value is undefined because of hoisting
var price = 100;    // declare and assign
console.log(price); // now prints assigned value
// Output
// undefined
// 100
// Explanation:
// - The `var price` declaration is hoisted to top, but assignment (=100) stays in place.

// Example 4: real-world (shopping cart counter)
function addItemsOldStyle() {
    var cartCount = 0; // start with zero items
    cartCount = cartCount + 1; // add one item
    console.log("Cart count:", cartCount); // show cart count
    // Output
    // Cart count: 1
}
addItemsOldStyle();

// Notes for beginners:
// - Prefer `let` and `const` in new code. `var` is important to understand for older code.
// - Because of hoisting and redeclaration, `var` can cause bugs in large codebases.

