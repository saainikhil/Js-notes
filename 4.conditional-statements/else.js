// Else statement:

// Simple Definition:
// else executes code when the if condition is false.

// Technical Definition:
// The else statement provides an alternative execution block when the associated if condition evaluates to false.

// It is used when the One condition has two possible outcomes and you want to execute different code for each outcome.

//syntax:
let condition = true; // placeholder for syntax example
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
// Flow of Execution:
// 1. Condition checked
// 2. If true: if block executes
// 3. Otherwise: else block executes


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
    console.log('even number');  //5%2 gives you 1, which is not equals 0, so it goes to else bloc and print odd number.
} else {
    console.log('odd number'); // 5
} // Output: odd number

// Key Point
// else cannot exist alone. It must always be attached to an if statement


 