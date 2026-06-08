// Title
// Boolean - true or false
//
// Definition
// `boolean` is a data type with only two values: `true` or `false`. It is used
// to represent yes/no, on/off, or pass/fail conditions.
//
// Syntax
// let flag = true;
// let isValid = false;
//
// Why We Use It
// To make decisions in code (if statements), track status (logged in or not), and
// control flow.
//
// Where It Is Used
// Login checks, form validation, feature toggles, comparisons, and filters.
//
// Characteristics
// - Only two values: true or false
// - Often produced by comparisons (>, <, ===)
//
// Common Operations
// - Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
// - Logical operators: `&&` (and), `||` (or), `!` (not)
//
// Examples

// Example 1: direct boolean values
let isOpen = true; // store a boolean
console.log(isOpen); // prints true
// Output
// true

// Example 2: comparison produces boolean (real-world: check stock availability)
let stock = 5;
let needs = 3;
let canSell = stock >= needs; // true if enough stock
console.log("Can sell:", canSell);
// Output
// Can sell: true
// Explanation: comparison returns a boolean value.

// Example 3: login check (real-world: simple login flag)
let storedPassword = "secret";
let typedPassword = "secret"; // from a login form
let isAuthenticated = typedPassword === storedPassword; // strict equality
console.log("Authenticated:", isAuthenticated);
// Output
// Authenticated: true

// Example 4: logical operators (combine checks)
let hasCard = true;
let hasCash = false;
let canPay = hasCard || hasCash; // true if either payment method is available
console.log("Can pay:", canPay);
// Output
// Can pay: true

// Notes for beginners:
// - Use `===` for strict equality (checks type and value).
// - Use boolean results from comparisons and logical operators to control `if` statements.
