# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet easily overlooked bug in JavaScript: unexpected string concatenation due to its dynamic typing system.

## The Bug
The `foo` function is intended to add two numbers. However, if one of the arguments is a string, the '+' operator performs string concatenation instead of numerical addition.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the script using Node.js (or any other JavaScript runtime).
4. Observe the unexpected output.

## Solution
The `bugSolution.js` file provides a corrected version of the `foo` function.  It uses the `Number()` function to explicitly convert the inputs to numbers before performing addition, ensuring correct numerical behavior.

## Lessons Learned
This example highlights the importance of careful type handling in JavaScript, especially when working with external data or user input where the type might be uncertain. Always explicitly type-check or convert inputs to prevent these types of errors.