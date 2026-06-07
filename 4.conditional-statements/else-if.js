// 3.Else if statement:
// Simple Definition:
// else if checks multiple conditions one after another.

// Technical Definition:
// else if allows sequential evaluation of multiple conditional expressions until one condition becomes true.

// It is used when multiple choices exists and multiple conditions need checking
//for example:-  grades checking, traffic, ranking system


// Syntax Explanation:
let condition1 = false; // example placeholders for syntax
let condition2 = true;
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}

//Flow of Execution:
// 1.first condition checked
// 2.If false: Next condition checked
// 3.Process continues
// 4.First true block executes
// 5.Remaining blocks skipped
// 6.If none true: else executes

//basic example:
let marks = 79;

if (marks >= 90){
    console.log('grade A');
} else if(marks >= 80) {
    console.log('grade B');
} else if (marks >= 50) {
    console.log('Grade C');
} else {
    console.log('Fail');
}  // putput: grade C

// Real-World Practical Example
let temperature = 35;

if (temperature > 40) {
    console.log('Very Hot');
} else if (temperature > 30) {
    console.log('Hot Weather');
} else if (temperature > 20) {
    console.log('Normal Weather');
} else {
    console.log('Cold Weather');
}  // output: Hot Weather

