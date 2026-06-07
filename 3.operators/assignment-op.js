// Definition
// Assignment operators assign values to variables and can combine assignment with an operation.
// Why it is used
// To store values, update accumulators, and simplify common patterns like total += price.
// Where it is used
// Counters, totals, state updates, and incremental calculations.
// How many operators are there in this category
// Common ones: =, +=, -=, *=, /=, %=, **=, <<=, >>=, &=, |=, ^=

// List all operators
// =  (basic assignment)
// += (add and assign)
// -= (subtract and assign)
// *= (multiply and assign)
// /= (divide and assign)
// %= (remainder and assign)
// **= (exponent and assign)
// Bitwise assignment variants also exist (advanced)

// Syntax
// a = b
// a += b
// a -= b
// a *= b
// a /= b
// a %= b
// a **= b

// Basic Example
let total = 0;
let price = 30;
total += price; // total = total + price
console.log(total);

// Output
// 30

// Explanation
// total starts at 0, then += adds price and stores the new value in total.

// Real-world Example: cumulative marks
let marks = 0;
marks += 40; // first subject
marks += 35; // second subject
console.log(marks);

// Output
// 75

// Explanation
// Using += lets us add marks from multiple subjects to the same variable.

// Examples per operator (each section is self-contained)

// = (basic assignment)
// Definition
// = stores a value into a variable.
// Syntax
// a = value
{
	let num = 10;
	let x = num;
	console.log(x);
	// Output
	// 10
	// Explanation
	// x now holds the value 10 copied from num.
}

// += (add and assign)
// Syntax
// a += b
{
	let total = 0;
	let price = 30;
	total += price; // total = total + price
	console.log(total);
	// Output
	// 30
	// Real-world: shopping cart accumulate
	let cartTotal = 0;
	cartTotal += 100; // first item
	cartTotal += 50;  // second item
	console.log(cartTotal);
	// Output
	// 150
}

// -= (subtract and assign)
// Syntax
// a -= b
{
	let balance = 500;
	let withdraw = 100;
	balance -= withdraw; // balance = balance - withdraw
	console.log(balance);
	// Output
	// 400
}

// *= (multiply and assign)
// Syntax
// a *= b
{
	let price = 20;
	let qty = 3;
	price *= qty; // price = price * qty
	console.log(price);
	// Output
	// 60
}

// /= (divide and assign)
// Syntax
// a /= b
{
	let total = 120;
	let people = 3;
	total /= people; // total = total / people
	console.log(total);
	// Output
	// 40
}

// %= (remainder and assign)
// Syntax
// a %= b
{
	let num = 10;
	num %= 3; // num = num % 3
	console.log(num);
	// Output
	// 1
}

// **= (exponent and assign)
// Syntax
// a **= b
{
	let n = 2;
	n **= 3; // n = n ** 3
	console.log(n);
	// Output
	// 8
}

// Bitwise assignment examples (simple)
// <<=, >>=, &=, |=, ^=
// Syntax example for <<=
{
	let x = 2; // 10 in binary
	x <<= 1; // x = x << 1 -> shifts left -> 100 (4)
	console.log(x);
	// Output
	// 4
}

// Explanation
// Bitwise assignment operators combine shift/bitwise ops with assignment.

// Combined assignment example
{
	let total = 0;
	total += 50;
	total -= 10;
	total *= 2;
	console.log(total);
	// Output
	// 80
}
