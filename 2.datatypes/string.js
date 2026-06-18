// Title
// String - Text data type
//
// Definition
// A `string` is a sequence of characters used to store text like names, messages,
// or any textual data.
//
// Syntax
// let text = "Hello";
// or
// let text = 'Hello';
//
// Why We Use It
// We use strings to store user names, messages, form input, product titles, and more.
//
// Where It Is Used
// Login forms (usernames), product names, email content, labels on a website.
//
// Characteristics
// - Enclosed in single or double quotes (or backticks for templates)
// - Immutable (strings cannot be changed in place; operations return new strings)
//
// Common Methods
// - `length` property: string.length
// - `toUpperCase()` / `toLowerCase()`
// - `indexOf(sub)` finds position of substring
// - `slice(start, end)` extracts part of string
// - `trim()` removes whitespace
// - `split(separator)` converts string to array
//
// Examples

// Example 1: basic string and length
let name = "Madhu"; // store a user name
console.log(name); // prints the name
console.log(name.length); // prints number of characters
// Output
// Madhu
// 5
// Explanation: length counts letters and the space.

// Strings can hold numbers as well, but they are treated as text, not for calculations.
let numericString = "12345";
console.log(numericString); // output: 12345
console.log(typeof numericString); // output: string
// Explanation: even though it looks like a number, it's a string because of the quotes. And can't be used for math operations directly without conversion.

let a = 1;
let b = "2";
console.log(a + b); // output: 12
// Explanation: adding a number and a string results in string concatenation, not arithmetic addition.

// Example 2: changing case and trimming
let email = "  user@example.com  "; // user input with extra spaces
console.log("Before:", email);
console.log("After trim:", email.trim());
console.log("Upper:", email.trim().toUpperCase());
// Output
// Before:   user@example.com  
// After trim: user@example.com
// Upper: USER@EXAMPLE.COM
// Explanation: trim removes spaces; toUpperCase converts letters to uppercase.

// Example 3: find substring and slice (real-world: get domain from email)
let userEmail = "customer@bank.com";
let atIndex = userEmail.indexOf("@"); // find @ position
let domain = userEmail.slice(atIndex + 1); // take text after @
console.log("Domain:", domain);
// Output
// Domain: bank.com
// Explanation: indexOf returns position, slice extracts substring starting after @.

// Example 4: template strings (backticks) - build message for shopping cart
let product = "Shoes";
let qty = 2;
let message = `You added ${qty} ${product} to your cart.`; // template string
console.log(message);
// Output
// You added 2 Shoes to your cart.
// Explanation: ${...} inserts values into the string.

// Real-world example: format user greeting (e-commerce)
let firstName = "Priya";
let greeting = "Hello, " + firstName + "! Welcome back."; // simple concatenation
console.log(greeting);
// Output
// Hello, Priya! Welcome back.

// Notes:
// - Use template strings (backticks) when you need to combine values.
// - Strings are for text; use numbers for math.
