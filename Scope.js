//! There are five type of scopes in Javascript

//! 1. Global Scope
//! 2. Local Scope
//! 3. Block Scope
//! 4. Function Scope
//! 5. Lexical Scope



// Global scope in Javascript
// Global scope is the outermost scope in the Javascript code.
// It is the scope where the global variables are defined.

var globalVar = "Global Variable"; // This variable is in global scope.
function globalFunc() {
    var localVar = "Local Variable"; // This variable is in global scope.
    console.log(localVar);
}
// globalFunc();
// console.log(globalVar);


// Local scope in Javascript
// Local scope is the innermost scope in the Javascript code.
// It is the scope where the local variables are defined.

function localFunc() {
    var localVar = "Local Variable"; // This variable is in local scope.
    console.log(localVar);
}
// localFunc();


// Block scope in Javascript
// Block scope is the scope within curly braces {}.
// It is the scope where the variables are defined in the block.

function blockFunc() {
    if (true) {
        var localVar = "Local Variable"; // This variable is in block scope.
        console.log(localVar);
    }
}
// blockFunc();


// Function scope in Javascript
// Function scope is the scope within the function.
// It is the scope where the variables are defined in the function. 

function funcFunc() {
    var localVar = "Local Variable"; // This variable is in function scope.
    console.log(localVar);
}
// funcFunc();


// Lexical scope in Javascript
// Lexical scope is the scope within the lexical scope.
// It is the scope where the variables are defined in the lexical scope.

function lexicalFunc() {
    var localVar = "Local Variable"; // This variable is in lexical scope.
    console.log(localVar);
}
// lexicalFunc();
// console.log(localVar); // This will throw an error because localVar is not defined in the global


// Closure scope in Javascript
// Closure scope is the scope within the function.
// It is the scope where the variables are defined in the function.

function closureFunc() {
    var localVar = "Local Variable"; // This variable is in closure scope.
    console.log(localVar);
}
// closureFunc();

