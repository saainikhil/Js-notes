// What are Operators ?
// Operators are special symbols that perform operations on values and variables.
// Why operators are used ?
// Operators help perform arithmetic, comparison, assignment, logical checks and more.
// Where operators are used ?
// Used in calculations, decision making, assignment, bitwise operations, and conditional logic.

// How many types of operators are there ?
// There are many categories: arithmetic, assignment, comparison, logical, unary, ternary, bitwise, and others.

// List and short explanation of all operators
// - Arithmetic: +, -, *, /, %, **, ++, --  (math operations)
// - Assignment: =, +=, -=, *=, /=, %=, **=, etc.  (assign values)
// - Comparison: ==, ===, !=, !==, >, <, >=, <=  (compare values)
// - Logical: &&, ||, !  (combine boolean expressions)
// - Unary: typeof, delete, + (unary plus), - (unary minus), !  (single-operand ops)
// - Ternary: condition ? expr1 : expr2  (short if-else)
// - Bitwise: &, |, ^, ~, <<, >>, >>>  (bit-level operations)

// Basic syntax for operators
// (Examples below show typical usage)

// Small beginner-friendly examples
{
    // arithmetic
    let a = 10;
    let b = 5;
    console.log(a + b); // 15

    // assignment
    let total = 0;
    total += a; // total = total + a
    console.log(total); // 10

    // comparison
    console.log(a > b); // true

    // logical
    console.log(a > 5 && b < 10); // true

    // unary
    console.log(typeof a); // number

    // ternary
    let status = a > b ? 'a is larger' : 'b is larger';
    console.log(status); // a is larger
}
