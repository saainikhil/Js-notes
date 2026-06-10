// Title
// var - Declaring variables (old style)
//
// Definition
// `var` declares a variable in JavaScript. It was the original way to create variables.
//
// Syntax
// var variablename = value;
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

//declaring a variable with var
var message = "Hello, World!";
console.log(message); // Output: Hello, World!



//reassigning a variable declared with var
message = "Hello, JavaScript!";
console.log(message); // Output: Hello, JavaScript!




// Example var redeclaration
var name = "Alice"; // declare name
var name = "Bob";   // redeclare same name (allowed with var)
console.log(name); // prints latest value
// Output  Bob
// Explanation: the second declaration replaces the previous value.


// Example var is function-scoped
function VarScope() {    // Declare with var inside function
    var a = 10; // a is available anywhere inside this function
    console.log(a); // prints the value of a
    // Output
    // 10
}
VarScope();
// console.log(a); //cause ReferenceError


//global variable declared with var
var globalVar = "I am global"; // global variable
function checkGlobal() {
    console.log(globalVar); // can access global variable inside function   
}
checkGlobal(); // Output: I am global
console.log(globalVar); // can access global variable outside function too
// Output: I am global



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

// Notes for beginners:
// - Prefer `let` and `const` in new code. `var` is important to understand for older code.
// - Because of hoisting and redeclaration, `var` can cause bugs in large codebases.