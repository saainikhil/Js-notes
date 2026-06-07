// What is do-while loop ?
// A do-while loop executes a block of code once and then repeats the block while the condition is true.
// Why do we use do-while ?
// Use it when you must run the loop body at least once (e.g., input validation, menus).
// Where we use it in real projects ?
// Console menus, retry logic, initial data fetch attempts, and user prompts.

// Syntax
let _condition_example = false; // placeholder so syntax example is safe
do {
    // statements
} while (_condition_example);

// Flow explanation
// 1. Execute the statements inside the `do` block once.
// 2. Evaluate the `condition`.
// 3. If true, repeat the `do` block. If false, exit the loop.

// Difference between while and do-while
// - `while` checks the condition before running the loop body (may run 0 times).
// - `do-while` runs the body once before checking the condition (runs at least once).

// Simple example
{
    let i = 1;
    do {
        console.log('Count:', i);
        i++;
    } while (i <= 3);
    // Output:
    // Count: 1
    // Count: 2
    // Count: 3
}

// Real-time example: basic retry attempt
{
    let attempts = 0;
    const max = 3;
    let success = false;

    do {
        attempts++;
        // fake attempt: succeed on 2nd try
        success = (attempts === 2);
        console.log('Attempt', attempts, 'success?', success);
    } while (!success && attempts < max);

    // Possible output:
    // Attempt 1 success? false
    // Attempt 2 success? true
}

// Beginner mistakes
// - Forgetting to update loop variable (infinite loops).
// - Using wrong condition that never becomes false.
// - Assuming `do-while` and `while` are interchangeable when initial execution matters.

// Interview questions
// Q: When would you use a do-while instead of a while?
// Q: How can a do-while loop lead to an infinite loop? Give an example.

// End of do-while loop notes
