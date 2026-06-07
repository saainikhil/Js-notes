// Definition
// Arithmetic operators perform basic math operations on numbers.
// Why it is used
// Used to calculate totals, compute scores, update counters, and other numeric tasks.
// Where it is used
// Shopping carts, marks calculations, salary math, timers, and game scores.
// How many operators are there in this category
// +, -, *, /, %, **, ++, -- (7 common arithmetic operators)

// List all operators
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulus / remainder)
// ** (exponentiation)
// ++ (increment)
// -- (decrement)

// Syntax
// a + b
// a - b
// a * b
// a / b
// a % b
// a ** b
// a++ or ++a
// a-- or --a

// Examples per operator (each section is self-contained)

// + (addition)
// Definition
// + adds two numeric values and returns their sum.
// Why it is used
// To add amounts, counts, or combine values.
// Syntax
// a + b
{
	let a = 10;
	let b = 5;
	let sum = a + b;
	console.log(sum);
	// Output
	// 15
	// Explanation
	// + adds a and b and returns the result 15.
	// Real-world Example: add item prices
	let price = 100;
	let tax = 10;
	let total = price + tax;
	console.log(total);
	// Output
	// 110
}

// - (subtraction)
// Definition
// - subtracts the right operand from the left operand.
// Syntax
// a - b
{
	let a = 20;
	let b = 7;
	console.log(a - b);
	// Output
	// 13
	// Real-world Example: remaining balance
	let balance = 500;
	let withdraw = 150;
	let remaining = balance - withdraw;
	console.log(remaining);
	// Output
	// 350
}

// * (multiplication)
// Definition
// * multiplies two numbers.
// Syntax
// a * b
{
	let a = 6;
	let b = 7;
	console.log(a * b);
	// Output
	// 42
	// Real-world Example: total price for multiple items
	let price = 50;
	let qty = 3;
	console.log(price * qty);
	// Output
	// 150
}

// / (division)
// Definition
// / divides left operand by right operand.
// Syntax
// a / b
{
	let a = 20;
	let b = 4;
	console.log(a / b);
	// Output
	// 5
	// Real-world Example: split bill
	let total = 120;
	let people = 3;
	console.log(total / people);
	// Output
	// 40
}

// % (modulus / remainder)
// Definition
// % gives remainder after dividing left operand by right operand.
// Syntax
// a % b
{
	let a = 10;
	let b = 3;
	console.log(a % b);
	// Output
	// 1
	// Real-world Example: check even/odd
	let num = 7;
	console.log(num % 2);
	// Output
	// 1 (odd)
}

// ** (exponentiation)
// Definition
// ** raises left operand to the power of right operand.
// Syntax
// a ** b
{
	let a = 2;
	let b = 3;
	console.log(a ** b);
	// Output
	// 8
	// Real-world Example: calculate square
	let n = 5;
	console.log(n ** 2);
	// Output
	// 25
}

// ++ (increment) and -- (decrement)
// Definition
// ++ increases by 1; -- decreases by 1. Can be prefix or postfix.
// Syntax
// ++a, a++, --a, a--
{
	let a = 5;
	console.log(a++); // postfix returns old value
	console.log(a);   // now incremented
	// Output
	// 5
	// 6
	// Explanation
	// a++ returns the value then increments.

	let b = 5;
	console.log(++b); // prefix increments then returns
	// Output
	// 6
	// Real-world Example: counter
	let counter = 0;
	counter++;
	console.log(counter);
	// Output
	// 1
}

// Combined arithmetic example
{
	let price = 200;
	let tax = 20;
	let discount = 50;
	let final = price + tax - discount; // uses + and -
	let perItem = final / 3; // uses /
	console.log(final, perItem);
	// Output
	// 170 56.666666666666664
}
