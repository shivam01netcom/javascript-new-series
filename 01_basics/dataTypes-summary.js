// Primitive(call by value)
//7 types : String, Number, Boolean, Undefined, null, BigInt, Symbol(introduced in ES6)  

const number = 100;
const numberNew = 100.3;

const userLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol('234');
const secondId = Symbol('234');

// console.log(id);
// console.log(secondId);
// console.log(id == secondId);
// console.log(id === secondId);

let checkId = Symbol('123');
//checkId = 123;
console.log(checkId);

const mySymbol1 = Symbol('description1');
//console.log(mySymbol1.description); 

// creating a symbol
const mySymbol = Symbol("xyz"); 

//Using Symbols as Object Properties:
const myObjects = {};
myObjects[mySymbol] = 'This is a secret!';
//console.log(myObjects[mySymbol]); 

// or shortcut of object property
const myObject = {
    [mySymbol]: 'This is a symbol property'
  };
  
//   console.log(myObject[mySymbol]); 
//   console.log(myObject.xyz); 
  
//In JavaScript, when you use square brackets ([]) to define an object property key, it allows you to use an expression or a variable to dynamically determine the property name. If you don't use square brackets, the property name is treated as a string.



// ******** Symbol in depth(summary) **************
/* 1.const mySymbol = Symbol();: Here, you're creating a new Symbol using the Symbol() constructor. This creates a unique Symbol and assigns it to the mySymbol variable. Every time you call Symbol(), it creates a new, different Symbol.

const mySymbol1 = Symbol();
const mySymbol2 = Symbol();
console.log(mySymbol1 === mySymbol2); // false (Symbols are always unique) */
const propertyName = 'dynamicPropertyName';
const myObject2 = {
  [propertyName]: 'This property has a dynamic name'
};
// console.log(myObject2[propertyName]);
// console.log(myObject2.dynamicPropertyName); // "This property has a dynamic name"





// Referance (Non Primitive)(call by reference)
//Array, Objects, Functions
const array = ["ram","shyam","radhika"];
const myObj = {
    shivam:"reactJsDeveloper",
    hemangi:"UIDeveloper",
    rohit:"Developer"
}
// console.log(myObj.shivam);
//console.log(myObj[hemangi]);
//console.log(array[0]);

/***********  Basic function concept in detail  **************/
// 1.Function Declaration:
// A function is a reusable block of code. You declare a function like this:
function myFunction() {
    console.log("Hello, World!");
  }
 // To use this function, you simply call it by its name: myFunction().

 //2.Function Expression:
 //You can also define a function using an expression and assign it to a variable:
 const testFunction = function() {
    console.log("Hello, World!");
  };
  //You call this function the same way: myFunction().
  
 //3.Arrow Function:
 //Arrow functions are a shorter way to write functions, often used for simple, concise functions like in your example: 
 const myArrowFunction = () => {
    console.log("Hello, World!");
  };
  //Call it the same way: myArrowFunction().

//Return Statement:
//The return statement is used to specify the value a function should produce when it's called. Here's when and how it's used:

//1.Returning a Value:
//If you want a function to return a value, you use the return statement:
function add(a, b) {
    return a + b;
  }
  
  const result = add(3, 5);
  console.log(result); // 8
  //The return statement is used to provide the result of the function, and you can use that result wherever you call the function.

//2.No Return:
//Not all functions need to return a value. Some functions exist for their side effects, like your example:
const myArrowFunctions = () => {
    console.log("Hello, World!");
  };
  //Here, myArrowFunction doesn't return anything. It just logs a message to the console. Functions like these are often used for tasks that don't require a result, but rather perform some action.

//3.Returning Early:
//You can use the return statement to exit a function early. This can be useful for conditions:
function isPositive(num) {
    if (num > 0) {
      return true;
    }
    return false;
  }
  

  //In summary, you use the return statement when you want a function to provide a result, and not all functions need to return something. Some functions are used for their side effects, such as logging to the console, and they don't require a return statement.

  //kisi bhi variable ka data type janane ke liye hm typeOf ka use karte h piche dekh chuke h like console.log(typeOf num)
  //non primitive ke datatypes , object or (object function) hote h sare ke 
//   console.log(typeof array);//object
//   console.log(typeof isPositive);// function but actually object function hote h 
  

// JavaScript statically typed or dynamically typed language 

// JavaScript is a dynamically typed language. This means that in JavaScript, the data types of variables are not explicitly declared and are not fixed. Instead, the data type of a variable is determined at runtime, based on the type of value it currently holds.