// Else statement:

// Simple Definition:
// else executes code when the if condition is false.

// Technical Definition:
// The else statement provides an alternative execution block when the associated if condition evaluates to false.
// It is used when a condition has two possible outcomes and you want to execute different code for each outcome.

//syntax:
let condition = true; // placeholder for syntax example
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
// Flow of Execution:
// 1. Condition is evaluated.
// 2. If the condition is true, the if block executes.
// 3. If the condition is false, the else block executes.
// 4. Program execution continues.

// Flow Diagram
// Condition Checked
//       |
//      True ---------> if block executes
//       |
//      False --------> else block executes
//       |
//    Program continues


// Basic example:

let number = -9;
if (number > 0){
    console.log('this is positive number');
} else {
    console.log('this is negative number');
}  // Output: this is negative number

// another example using operator:
let num = 5;
if (num %2 === 0){
    console.log('even number');  // 5 % 2 gives 1, which is not equal to 0. Therefore, the condition is false and the else block executes.
} else {
    console.log('odd number'); // 5
} // Output: odd number

// Key Point
// else cannot exist alone. It must always be attached to an if statement


//real-world example login validation.
let password = "12345";
if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Invalid Password");
} // output: invalid password

// If the password matches, user logs in.
// Otherwise, an error message is shown.


// Multiple Statements Inside else
let marks = 30;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
    console.log("Attend Remedial Classes");
    console.log("Prepare for Re-exam");
}
// we can print multiple statements inside else as well.

// Else with truthy and falsy values
let username = "";
if (username) {
    console.log("Welcome User");
} else {
    console.log("Username Required");
} //output: username required
// "" is a falsy value.
// Therefore, the condition becomes false and the else block executes.


 