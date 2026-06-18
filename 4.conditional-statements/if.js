// JavaScript Control Statements
// What are Control Statements?
// Clear Definition

// Simple Definition:
// Control statements are statements that decide the flow of execution in a JavaScript program.

// Technical Definition:
// Control statements are programming constructs used to control the order in which statements are executed based on conditions, decisions, or multiple choices.

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
// if(condition): This keyword indicates the start of an if statement.
// JavaScript converts the condition into a boolean value.
// Truthy values become true and falsy values become false.

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


// F// 1. Program reaches the if statement.
// 2. Condition is evaluated.
// 3. If the condition is true, the code inside the block executes.
// 4. If the condition is false, the block is skipped.
// 5. Program execution continues with the next statement.

// Basic Example using comparison operator
let age = 20;

if (age >= 18) {
    console.log('You are eligible to vote');
} // Output: You are eligible to vote
// In this example, the condition (age >= 18) is true, so the code block inside the if statement is executed, and 
// "You are eligible to vote" is printed to the console.

// Truthy and falsy values
// In JavaScript, any expression can be placed inside an if condition.
// example:
if(1){
    console.log("executed");
}; //output: executed
// Because 1 is a truthy value.
if(0){
    console.log("executed");
}
// there are only 8 falsy values in js.
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// example
if(""){
    console.log("hello");
};
console.log("done"); 
//output: done 
// hello will not print because "" is a falsy value.


// common comparison operator:
// | Operator | Meaning               |
// | -------- | --------------------- |
// | >        | Greater than          |
// | <        | Less than             |
// | >=       | Greater than or equal |
// | <=       | Less than or equal    |
// | ==       | Equal                 |
// | ===      | Strict Equal          |
// | !=       | Not Equal             |
// | !==      | Strict Not Equal      |



// using logical operators in if
// AND (&&) operator
let riderage = 20;
let haslicense = true;
if(age >= 18 && haslicense){
    console.log("can drive");
}  //output: can drive

// here both conditions must be true
// if first condition is false, the second condition will be skipped and prints nothing

// OR (||) operator
let isadmin = true;
let ismanager = false;
if (isadmin || ismanager){
    console.log("can access");
}  //output: can access

// Here at least one condition must be true.
// If the first condition is true, JavaScript skips checking the second condition because of short-circuit evaluation.

// Short-Circuit Evaluation:
// In &&, if the first condition is false,
// JavaScript skips evaluating the second condition.
// In ||, if the first condition is true,
// JavaScript skips evaluating the second condition.


// NOT Operator (!)
// Reverses a boolean value.
let isBlocked = false;
if (!isBlocked) {
    console.log("User Allowed");
} //output: user allowed 
// Because the ! operator reverses a boolean value.
// false becomes true and true becomes false.


// we can print multiple statements inside if
let userage = 20;
if(userage >= 18){
    console.log("major");
    console.log("can drive");
    console.log("can vote");
}


// Real-World Practical Example:-
let balance = 5000;
let withdrawAmount = 2000;

if (balance >= withdrawAmount) {
    console.log('Withdrawal successful');
}   // Output: Withdrawal successful

// Explanation
// Bank allows withdrawal only if sufficient balance exists.

// dont use assignment operators in conditional statements always use comparison operators
// example 
let studentage = 20;
if(studentage = 18){
    console.log("can apply");
}  //output: 
// This assign 18 to studentage, and prints nothing.

// correct usage
if(studentage>=18){
    console.log("can apply");
} //output: can apply
