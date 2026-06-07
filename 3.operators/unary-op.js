// Definition
// Unary operators operate on a single operand and return a value.
// Why it is used
// For type checks, removing properties, numeric conversions, and simple negation.
// Where it is used
// Type checking, deleting object properties, and quick conversions.
// How many operators are there in this category
// Common unary operators: typeof, delete, + (unary plus), - (unary minus), !, ++, --

// List all operators
// typeof
// delete
// + (convert to number)
// - (negation)
// ! (logical NOT)
// ++ (increment)
// -- (decrement)

// Syntax
// typeof x
// delete obj.prop
// +str
// -num
// !flag
// x++ or ++x

// Basic Example
let str = '123';
console.log(+str); // converts to number 123

// Output
// 123

// Explanation
// Unary + converts numeric strings to numbers.

// Real-world Example: delete sensitive data from object
let user = { name: 'Sam', password: 'secret' };
delete user.password;
console.log(user);

// Output
// { name: 'Sam' }

// Explanation
// delete removes the `password` property from the user object.

// Examples per unary operator

// typeof
// Syntax
// typeof x
{
	let num = 10;
	console.log(typeof num);
	// Output
	// number
	// Explanation
	// typeof returns the type of the operand.
}

// delete
// Syntax
// delete obj.prop
{
	let user = { name: 'Sam', password: 'secret' };
	delete user.password;
	console.log(user);
	// Output
	// { name: 'Sam' }
	// Explanation
	// delete removes a property from an object.
}

// + (unary plus)
// Syntax
// +str
{
	let str = '123';
	console.log(+str);
	// Output
	// 123
	// Explanation
	// Unary + converts a numeric string to a number.
}

// - (unary minus)
// Syntax
// -num
{
	let num = 5;
	console.log(-num);
	// Output
	// -5
	// Explanation
	// Unary - negates the number.
}

// ! (logical NOT)
// Syntax
// !flag
{
	let flag = false;
	console.log(!flag);
	// Output
	// true
	// Explanation
	// ! flips the boolean.
}

// ++ and -- (increment/decrement)
// Syntax
// x++, ++x, x--, --x
{
	let a = 2;
	console.log(a++); // outputs 2 (postfix)
	console.log(a);   // 3
	// Output
	// 2
	// 3
	// Explanation
	// a++ returns old value then increments.
}

{
	let b = 2;
	console.log(++b); // 3 (prefix)
	// Output
	// 3
}

// Combined unary example (only unary operators used)
{
	let num = '10';
	console.log(+num); // convert to number
	console.log(typeof +num); // number
	// Output
	// 10
	// number
}
