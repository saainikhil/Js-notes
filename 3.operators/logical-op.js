// Definition
// Logical operators combine boolean values and return true or false.
// Why it is used
// To check multiple conditions together and control branching logic.
// Where it is used
// Permissions checks, validation logic, and combined conditional rules.
// How many operators are there in this category
// Common ones: && (AND), || (OR), ! (NOT)

// List all operators
// && (logical AND)
// || (logical OR)
// !  (logical NOT)

// Syntax
// a && b
// a || b
// !a

// Basic Example
let loggedIn = true;
let isAdmin = false;
console.log(loggedIn && isAdmin); // false
console.log(loggedIn || isAdmin); // true
console.log(!isAdmin); // true

// Output
// false
// true
// true

// Explanation
// && needs both true; || needs one true; ! flips the boolean.

// Real-world Example: permissions check
let user = { loggedIn: true, role: 'editor' };
let canEdit = user.loggedIn && (user.role === 'editor' || user.role === 'admin');
console.log(canEdit);

// Output
// true

// Explanation
// User can edit when logged in and role is editor or admin.

// Examples per logical operator

// && (logical AND)
// Syntax
// a && b
{
	let a = true;
	let b = false;
	console.log(a && b);
	// Output
	// false
	// Explanation
	// && returns true only if both operands are true.
	// Real-world: permission check where both conditions must be true
	let loggedIn = true;
	let hasSubscription = true;
	console.log(loggedIn && hasSubscription); // true
	// Output
	// true
}

// || (logical OR)
// Syntax
// a || b
{
	let a = false;
	let b = true;
	console.log(a || b);
	// Output
	// true
	// Explanation
	// || returns true if at least one operand is true.
	// Real-world: show premium badge if user is premium or admin
	let isPremium = false;
	let isAdmin = true;
	console.log(isPremium || isAdmin); // true
	// Output
	// true
}

// ! (logical NOT)
// Syntax
// !a
{
	let flag = false;
	console.log(!flag);
	// Output
	// true
	// Explanation
	// ! flips the boolean value.
}

// Combined logical example (only logical operators)
{
	let loggedIn = true;
	let role = 'editor';
	let canEdit = loggedIn && (role === 'editor' || role === 'admin');
	console.log(canEdit);
	// Output
	// true
}
