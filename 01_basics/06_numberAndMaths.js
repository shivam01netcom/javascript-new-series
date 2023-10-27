 const score = 300;
 //console.log(score);

 //1. Creating a Number Object:
 const balance = new Number(100);
 //console.log(balance);

 //The new Number() constructor is a way to create Number objects in JavaScript. Number objects are a wrapper around primitive number values (like integers or floats), and they provide additional methods for working with numbers. 

 //2. Converting a Number Object to a Primitive Value:
let numObject = new Number(42);
let primitiveValue = numObject.valueOf(); // Converts the Number object to a primitive number
let result = numObject + 5; 

// console.log(primitiveValue); 
// console.log(result);


//3. Accessing Number Object Properties:
const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;
const nan = Number.NaN;
const negInfinity = Number.NEGATIVE_INFINITY;

// console.log(max); 
// console.log(min); 
// console.log(nan); 
// console.log(negInfinity); 


//4. Using Number Object Methods:
var numberObject = new Number(123.456789);
var formatted = numberObject.toFixed(2); // Formats to 2 decimal places

// console.log(formatted); 

// console.log(numberObject.toString());
// console.log(numberObject.toString().length);

const otherNumber2 = 123.895;
//console.log(otherNumber2.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
//5. Checking if a Value is a Number Object:
//console.log(numberObject instanceof Number);


//+++++++++++++++ Maths +++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,9,8));
console.log(Math.max(3,8,2,9,10));
console.log(Math.random());// iski value hmesa 0 se 1 ke bich me aati h
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min1 = 10;
const max1 = 20;

console.log(Math.floor(Math.random() * (max1 - min1 + 1))+ min1);
