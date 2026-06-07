// Definition
// Comparison operators compare two values and return a boolean (true/false).
// Why it is used
// To check conditions, control program flow, and validate data.
// Where it is used
// Login checks, form validation, filtering data, and conditional statements.
// How many operators are there in this category
// Common ones: ==, ===, !=, !==, >, <, >=, <=

// List all operators
// ==  (equality, type-coercing)
// === (strict equality, no type coercion)
// !=  (not equal)
// !== (strict not equal)
// >   (greater than)
// <   (less than)
// >=  (greater than or equal)
// <=  (less than or equal)

// Syntax
// a == b
// a === b
// a != b
// a !== b
// a > b
// a < b
// a >= b
// a <= b

// Basic Example
let a = 10;
let b = '10';
console.log(a == b); // true (types coerced)
console.log(a === b); // false (different types)

// Output
// true
// false

// Explanation
// == compares after converting types; === compares both type and value.

// Real-world Example: age check
let age = 18;
console.log(age >= 18); // true

// Output
// true

// Explanation
// Checks if age is at least 18 for eligibility.

// Examples per comparison operator

// == (equality, type-coercing)
// Syntax
// a == b
{
	let a = 10;
	let b = '10';
	console.log(a == b);
	// Output
	// true
	// Explanation
	// == compares after converting types so 10 and '10' are equal.
}

// === (strict equality)
// Syntax
// a === b
{
	let a = 10;
	let b = '10';
	console.log(a === b);
	// Output
	// false
	// Explanation
	// === checks both type and value; number vs string are not equal.
}

// != (not equal) and !== (strict not equal)
// Syntax
// a != b
// a !== b
{
	console.log(10 != '9'); // true
	console.log(10 !== '10'); // true (different types)
	// Output
	// true
	// true
}

// >, <, >=, <=
// Syntax
// a > b, a < b, a >= b, a <= b
{
	let x = 5;
	console.log(x > 3); // true
	console.log(x < 10); // true
	console.log(x >= 5); // true
	console.log(x <= 4); // false
	// Output
	// true
	// true
	// true
	// false
	// Real-world Example: marks grading check
	let marks = 72;
	console.log(marks >= 50); // true (pass)
	// Output
	// true
}

// Combined comparison example
{
	let a = 5;
	let b = 10;
	console.log(a < b && b === 10); // true
	// Output
	// true
}
