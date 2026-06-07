// Nest if statement:

// Removed unrelated React import which was accidental in this learning file.

// Simple Definition:
// An if statement inside another if statement is called nested if.
// Technical Definition:
// Nested if statements are conditional structures where one conditional statement is placed inside another conditional block.

// It is used when multiple dependent conditions exits and one condition depends on another.
// In real world senorios login+otp verification, bank security system

// Syntax Explanation
// if (condition1) {

//     if (condition2) {
//         // code
//     }

// }

//Flow of execution:
// 1.First it will check outer condition then,
// 2.If true: inner condition checked
// 3.If inner condition is true: inner block executes.

//Basis example:

let age = 22;
let haslicense = true;
if (age >= 18){
    if (haslicense){
        console.log('you can drive');
    }
}   // output: you can drive


// Real-World Practical Example
let username = 'admin';
let otpVerified = true;

if (username === 'admin') {

    if (otpVerified) {
        console.log('Access Granted');
    }
}  //output: Access Granted



// if-else in nested statement:
let username2 = 'admin'; // renamed to avoid redeclaration in same scope
let password = '1234';

if (username2 === 'admin') {
    if (password === '1234') {
        console.log('Login successful');
    } else {
        console.log('Wrong password');
    }
} else {
    console.log('Invalid username');
}

