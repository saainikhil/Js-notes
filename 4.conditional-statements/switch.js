// 5.Switch statement:

// Simple Definition
// switch selects one block of code from multiple options.

// Technical Definition
// The switch statement evaluates an expression and executes matching case blocks based on strict comparison.

// It is used when multiple fixed values exist and is a cleaner alternative to long else-if chains.


// Syntax explanation:

// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
// }

// default is optional.
// If omitted and no case matches, nothing happens.

//flow of execution:-
//// Flow of execution:
// 1. switch evaluates the expression.
// 2. It compares the result with each case using strict equality (===).
// 3. If a match is found, execution starts from that case.
// 4. Execution continues until a break, return, or the end of the switch.
// 5. If no match is found, the default block executes (if present).
// 6. break exits the switch statement.

// basic example:
let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
} // output: Wednesday


//real world example
let role = "admin";
switch (role) {
    case "admin":
        console.log("Full access to the system");
        break;

    case "editor":
        console.log("Can edit content");
        break;

    case "viewer":
        console.log("Can only view content");
        break;

    default:
        console.log("Unknown role");
} // output: Full access to the system


// If break is omitted, execution continues into the next case.
let day2 = 1;
switch (day2) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
}
//output:
// Monday
// Tuesday
// Wednesday


// Multiple Cases Can Share One Block
let day3 = "Saturday";
switch (day3) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
// Output:
// Weekend

// switch can work with numbers, strings, booleans, and other values.
// Comparison is performed using strict equality (===).

let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It is an apple");
        break;
    case "banana":
        console.log("It is a banana");
        break;
    default:
        console.log("Unknown fruit");
}
// output: It is an apple


// Case Values Must Be Unique
let x = 1;
switch (x) {
    case 1:
        break;

    case 1: // Avoid duplicate cases
        break;
}

//Mention Where Switch Is Preferred
// Good use case
switch (role) {
    case "admin":
    case "editor":
    case "viewer":
}

// Use switch when:

// There are many fixed values.
// You are comparing the same variable repeatedly.

// Use if...else when:

// Conditions involve ranges (age > 18).
// Conditions involve complex logic.

//switch uses strict comparison
switch (value) {
    case "1":    // string
        break;
    case 1:      // number
        break;
}

//switch uses strict comparison in js (===)
switch (1) {
    case "1":
        console.log("Matched");
        break;
    default:
        console.log("Not Matched");
}
// Output:
// Not Matched
// Because 1 !== "1".