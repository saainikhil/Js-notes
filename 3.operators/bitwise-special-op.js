// Definition
// Bitwise operators work on the binary representation (bits) of numbers.
// Why it is used
// Used for low-level tasks, flags, masks, and performance-sensitive bit manipulations.
// Where it is used
// Hardware interfacing, permissions flags, compact storage, and some algorithms.
// How many operators are there in this category
// Common bitwise operators: &, |, ^, ~, <<, >>, >>>

// List all operators
// &   (AND)
// |   (OR)
// ^   (XOR)
// ~   (NOT)
// <<  (left shift)
// >>  (sign-propagating right shift)
// >>> (zero-fill right shift)

// Syntax
// a & b
// a | b
// a ^ b
// ~a
// a << b
// a >> b
// a >>> b

// Basic Example
let a = 5;  // binary 0101
let b = 3;  // binary 0011
console.log(a & b); // 1 (0001)

// Output
// 1

// Explanation
// & does bitwise AND between 0101 and 0011 resulting in 0001 (1).

// Real-world Example: simple permission flags
// read = 1 (001), write = 2 (010), execute = 4 (100)
let read = 1;
let write = 2;
let execute = 4;
let permissions = read | write; // give read and write
console.log(permissions); // 3

// Check if write permission exists
console.log((permissions & write) === write); // true

// Output
// 3
// true

// Explanation
// Use bitwise OR to combine flags and AND to check specific flags.

// Examples per bitwise operator

// & (AND)
// Syntax
// a & b
{
	let a = 5; // 0101
	let b = 3; // 0011
	console.log(a & b);
	// Output
	// 1
	// Explanation
	// AND preserves bits that are 1 in both numbers.
}

// | (OR)
// Syntax
// a | b
{
	let a = 5; // 0101
	let b = 2; // 0010
	console.log(a | b);
	// Output
	// 7 (0111)
	// Explanation
	// OR sets bits that are 1 in either number.
}

// ^ (XOR)
// Syntax
// a ^ b
{
	let a = 5; // 0101
	let b = 3; // 0011
	console.log(a ^ b);
	// Output
	// 6 (0110)
	// Explanation
	// XOR sets bits that differ between the operands.
}

// ~ (NOT)
// Syntax
// ~a
{
	let a = 2; // 0010
	console.log(~a);
	// Output
	// -3  (due to two's complement representation)
	// Explanation
	// ~ flips all bits; result is negative because of two's complement.
}

// << (left shift)
// Syntax
// a << b
{
	let a = 3; // 0011
	console.log(a << 1);
	// Output
	// 6 (0110)
	// Explanation
	// Left shift moves bits left, multiplying by 2 each shift.
}

// >> (sign-propagating right shift)
// Syntax
// a >> b
{
	let a = 6; // 0110
	console.log(a >> 1);
	// Output
	// 3 (0011)
	// Explanation
	// Right shift moves bits right, dividing by 2 and preserving sign.
}

// >>> (zero-fill right shift)
// Syntax
// a >>> b
{
	let a = -1;
	console.log(a >>> 1);
	// Output
	// 2147483647 (platform-dependent large number)
	// Explanation
	// >>> shifts right and fills left bits with zeros, producing large positive numbers for negative inputs.
}

// Combined bitwise example (flags only)
{
	// read = 1 (001), write = 2 (010), execute = 4 (100)
	let read = 1;
	let write = 2;
	let execute = 4;
	let perms = read | write; // combine
	console.log(perms); // 3
	console.log((perms & write) === write); // true
	// Output
	// 3
	// true
}
