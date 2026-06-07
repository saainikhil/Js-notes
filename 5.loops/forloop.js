// Loops in javascript:

// What are Loops in JavaScript?

// Simple Definition
// Loops are used to execute a block of code repeatedly until a condition becomes false.

// Technical Definition
// A loop is a control structure that repeatedly executes a set of statements based on a condition or iteration rule.


// Why Loops are Used / Real-World Purpose

// Loops help avoid writing repetitive code.

// Real-World Examples
// Sending notifications to 100 users
// Printing product lists from a database
// Reading array values
// Repeating tasks in games
// Processing student marks

// Without loops, we would need to write the same code many times.


// Types of Loops in JavaScript
// for loop
// while loop
// do...while loop
// Nested loops
// for...of loop
// for...in loop


// 1) For loop:-
// Simple Definition
// A for loop repeats code a fixed number of times.

// Technical Definition
// A for loop is an entry-controlled loop where initialization, condition checking, and increment/decrement happen in one statement.

// Why it is Used
// Used when the number of iterations is already known.

// Real-World Uses
// Printing numbers
// Looping through arrays
// Generating reports
// Repeating calculations

// Syntax
// for(initialization; condition; increment/decrement) {
//     code to execute
// }

// syntax explaination:
// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

// explaination:-
// Here (let i = 0;) --> initialization/ loop starts with index of 0
// here (i <= 5) --> condition/ Loop runs while condition is true.
// Here (i++) --> Increment/ After every iteration, i increases by 1.

// console.log(i)  -->  Code block executed repeatedly.

// Flow of Execution

// Step-by-step:
// 1--Initialization executes once
// 2--Condition is checked
// 3--If true → code executes
// 4--Increment/decrement happens
// 5--Again condition is checked
// 6--Stops when condition becomes false

// Examples:-
// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }   

// output :-
// 1
// 2
// 3
// 4
// 5

// real-world practical example:-

let totalstudents = 3;
for (let i = 1; i <=3; i++){
    console.log('send mail to student ' + i);
}  
//Output
// Sending email to student 1
// Sending email to student 2
// Sending email to student 3

