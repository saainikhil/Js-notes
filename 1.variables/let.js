// Title
// let - Block scoped variables
//
// Definition
// `let` declares a variable that is block-scoped. It is the recommended way to
// declare variables when the value will change.
//
// Syntax
// let name = value;
//
// Why We Use It
// `let` lets us store values that we may update later. It avoids some problems
// that `var` has because `let` is limited to the block (e.g., inside { }).
//
// Where It Is Used
// Use `let` when a variable will change, for example counters, temporary values,
// or loop indices.
//
// Characteristics
// - Block-scoped (only available inside nearest { } block)
// - Can be reassigned
// - Cannot be redeclared in the same block
// - Not hoisted in the same way as var (temporal dead zone applies)

// 6. Example
let globalLet = "global let";
function useGlobalLet() {
    console.log(globalLet);
}
useGlobalLet();
// Output: global let
// 7. Explanation
// The function can read the globally declared `let` variable.
//
// 8. Function Scope Definition
// Variables declared inside a function exist only inside that function.
//
// 9. Explain whether the variable can be accessed outside the function
// A `let` declared inside a function cannot be accessed from outside the function.
//
// 10. Example
function demoLetFunction() {
    let insideFunc = "inside function";
    console.log(insideFunc);
}
demoLetFunction();
// console.log(insideFunc); // ReferenceError if uncommented
// Output: inside function
// 11. Explanation
// `insideFunc` exists only inside `demoLetFunction`.
//
// 12. Block Scope Definition
// `let` is block-scoped: a variable declared with `let` inside { } is visible only
// inside that block.
//
// 13. Explain whether the variable can be accessed outside the block
// A `let` declared inside an if/for block cannot be accessed outside that block.
//
// 14. Example
if (true) {
    let blockVar = "inside block";
    console.log(blockVar);
}
// console.log(blockVar); // ReferenceError if uncommented
// Output: inside block
// 15. Explanation
// The `blockVar` is not available outside the if-block because `let` enforces block scope.
//
// Reassignment
// `let` variables can be reassigned to new values using `=`.
//
// Redeclaration
// You cannot redeclare the same `let` name in the same block.
//
// Hoisting Behavior
// `let` is hoisted but cannot be used before declaration. Using it before declaration
// causes a ReferenceError (this period is called the Temporal Dead Zone).
//
// Comparison with Other Variable Types
// - `var`: function-scoped, allows redeclaration.
// - `const`: block-scoped but cannot be reassigned.
// Use `let` when you need to change the value.



// Examples
//Assigning and reassigning a variable
let name = "Alice"; // declare and assign
console.log(name);  // Output: Alice
name = "Bob"; // reassign to new value
console.log(name); // Output: Bob


//redeclaring a variable
let age = 30; // declare age
// let age = 31; // would cause SyntaxError (cannot redeclare in the same block)
console.log(age); // Output: 30


// Example: block scope
{
    let x = 5; // x exists only inside this block
    console.log(x); // prints 5
}
// console.log(x); // would cause ReferenceError (x is not defined here


// Example: temporal dead zone (simple explanation)
// Using let before declaration throws an error. Uncomment to try.
// console.log(temp); // ReferenceError
// let temp = 10;



// Real-world example: updating user session attempts (login system)
let loginAttempts = 0; // start count
loginAttempts = loginAttempts + 1; // user tried to login once
console.log("Login attempts:", loginAttempts);
// Output: Login attempts: 1

// Notes:
// - Use `let` for variables that will change value.
// - Prefer `const` for values that should not change.
