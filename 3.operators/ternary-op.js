// Definition
// Ternary operator is a short form of if-else and returns one of two expressions based on a condition.
// Why it is used
// To write concise conditional assignments and quick checks.
// Where it is used
// Simple conditional rendering, quick assignments, and short checks.
// How many operators are there in this category
// One ternary operator: condition ? expr1 : expr2

// List all operators
// ? :  (ternary operator)

// Syntax
// condition ? expressionIfTrue : expressionIfFalse
// Ternary operator (single operator in this file)
// Definition
// The ternary operator evaluates a condition and returns one of two expressions.
// Why it is used
// For concise conditional assignments and small inline checks.
// Syntax
// condition ? expressionIfTrue : expressionIfFalse
{
	// Basic Example
	let score = 75;
	let result = score >= 50 ? 'Pass' : 'Fail';
	console.log(result);
	// Output
	// Pass
	// Explanation
	// If score is at least 50, result becomes 'Pass', otherwise 'Fail'.

	// Real-world Example: discount eligibility
	let total = 600;
	let discount = total > 500 ? 50 : 0;
	console.log(discount);
	// Output
	// 50
	// Explanation
	// If total is greater than 500, give a discount of 50, otherwise 0.
}

// Combined example (same operator only)
{
	let balance = 400;
	let fee = balance < 500 ? 20 : 0;
	console.log(fee);
	// Output
	// 20
	// Explanation
	// Uses ternary to decide fee based on balance.
}
