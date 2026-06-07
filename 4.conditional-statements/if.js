// JavaScript Control Statements
// What are Control Statements?
// Clear Definition

// Simple Definition:
// Control statements are statements that decide the flow of execution in a JavaScript program.

// Technical Definition:
//  programming constructs used to control the order in which statements are executed based on conditions, decisions, or multiple choices.
// Without control statements, programs would execute line-by-line only and could not make decisions.

// Why Control Statements Are Used

// Control statements help programs:
// Make decisions // Execute different code blocks based on conditions // Repeat tasks // Handle real-world logic

// Types of Control Statements in JavaScript:
// 1. Conditional Statements (if, else if, else, switch, nested if)

// 1. If Statement:-
// The if statement is used to execute a block of code if a specified condition is true. 
// If the condition is false, the code block is skipped.

// Syntax of if statement:
let condition = true; // example placeholder for syntax
if (condition) {
    // code to be executed if condition is true
}

// line-by-line explanation of the syntax:
// 1. if(condition): This keyword indicates the start of an if statement. and the condition must return true or false

// 2. {
//     // code to be executed if condition is true
// } 
// Curly braces contain code executed when condition is true.


// Example of if statement:
let number = 10;
if (number >5) {
    console.log('The number is greater than 5');
} // Output: The number is greater than 5

// In this example, the condition (number > 5) is true, so the code block inside the if statement is executed, and 
// "The number is greater than 5" is printed to the console. 


// Flow of Execution:-

// Program reaches if
// Condition is checked
// If condition is true Code inside block executes
// If condition is false Block is skipped
// Program continues

// Basic Example
let age = 20;

if (age >= 18) {
    console.log('You are eligible to vote');
} // Output: You are eligible to vote

// In this example, the condition (age >= 18) is true, so the code block inside the if statement is executed, and 
// "You are eligible to vote" is printed to the console.

// Real-World Practical Example:-
let balance = 5000;
let withdrawAmount = 2000;

if (balance >= withdrawAmount) {
    console.log('Withdrawal successful');
}   // Output: Withdrawal successful

// Explanation

// Bank allows withdrawal only if sufficient balance exists.