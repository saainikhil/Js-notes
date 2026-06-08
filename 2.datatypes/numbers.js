// Title
// Number - Numeric data type
//
// Definition
// `Number` stores numeric values: integers or decimals. JavaScript uses one Number
// type for all numeric values.
//
// Syntax
// let n = 10;
// let f = 3.14;
//
// Why We Use It
// To perform calculations: totals, prices, balances, counts, and measurements.
//
// Where It Is Used
// Shopping cart totals, bank balances, product quantities, grades, timers.
//
// Characteristics
// - Single numeric type for integers and floats
// - Supports arithmetic operators (+, -, *, /, %, **)
// - Be careful with floating point precision for decimals
//
// Common Methods / Helpers
// - `Math.round()`, `Math.floor()`, `Math.ceil()` for rounding
// - `toFixed(n)` to format decimals as string with n digits
// - `Number()` to convert strings to numbers
//
// Examples

// Example 1: basic arithmetic
let price = 250; // item price
let tax = 25; // tax amount
let total = price + tax; // add price and tax
console.log("Total:", total); // show total
// Output
// Total: 275

// Example 2: decimal and rounding
let unitPrice = 19.99;
let quantity = 3;
let subtotal = unitPrice * quantity; // multiplication
console.log("Subtotal:", subtotal); // may show floating number
console.log("Rounded:", subtotal.toFixed(2)); // format to 2 decimals
// Output
// Subtotal: 59.97
// Rounded: 59.97
// Explanation: toFixed returns a string with fixed decimals.

// Example 3: convert string to number (form input)
let input = "100"; // value from a form is often a string
let converted = Number(input); // convert to number
console.log(converted + 50); // numeric addition
// Output
// 150
// Explanation: if we didn’t convert, "100" + 50 would be string concatenation.

// Example 4: real-world (banking - simple interest calculation)
let principal = 1000; // amount in account
let rate = 0.05; // 5% interest
let interest = principal * rate; // calculate interest
console.log("Interest:", interest);
// Output
// Interest: 50

// Notes for beginners:
// - Use Number(...) to convert strings from inputs to numeric values.
// - Watch out for floating point rounding (use toFixed when showing money).
