

// const a=5;
// console.log(a);


// ? There are two types of data types in JS;
// 1. Primitives => {
    /*
    1. Boolean
    2. Number
    3. String
    4. Undefined
    5. Null
    6. Symbol
    7. BigInt
}
*/

// Number data Types
let a = 5;
let b = 5.5;
// console.log(a+b);


//String data types
let firstName = 'Ritik ';
let lastName = 'Rana';
// console.log(firstName+lastName);


//Boolean data types

let x = true;
let y = false;

// console.log(x);


//Undefined data types
var test;
// console.log(test);


//Null data types
let f = null;
// console.log(f)
// console.log(typeof(f));


//Symbol data types
const sym = Symbol("foo");
// console.log(sym);


//BigInt data types
const bigint = 123456789093457375n;
const new2 = bigint;
// console.log(bigint);
// console.log(typeof(new2));

// 2. Non-Primitives {
/* 
    1. Object
    2. Function
    3. Array
    4. Date
    5. RegExp
}
*/


//Object data types
const user = {
    "name": "Ritik",
    "age": 21,
    "isMarried": false    
};
// console.log(user);


//Array data types
const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);


//Date data types
const today = Date();
// console.log(today);


//Function data types
function greet(name) {
    // console.log(`Hello ${name}`);
};
//Function Call
greet('Ritik');


//RegExp data types
let pattern = /abc/;
// console.log(pattern);

