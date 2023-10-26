const name = "shivam";
const repo = 33;

// console.log(name + repo + "keshari")  //fine but not a good pratice

//console.log(`Hello my name is ${name} and my repo count is ${repo}`) // This practice , we follow through out the programming

const gameName = new String('shivam-ks-com');
//const gameName ='shivam-ks-com'; // both are same(line no. 8 and 9)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

const str = "Hello, World!";
//console.log(str.length); // 13

const str1 = "Hello";
const str2 = "World";
//console.log(str1.concat(", ", str2)); // "Hello, World"

const testStr = "Hello, World!";
// console.log(testStr.substring(0, 5)); // "Hello"
// console.log(testStr.substr(7, 5));    // "World"
// console.log(testStr.slice(0, 5));     // "Hello"
// console.log(testStr.substring(9,3)); // lo, Wo // start>end so reverse the value that means (3,9) internally reverse and give the value
// console.log(testStr.substring(-9,3)); //Hel // in case of negative start value that convert internally (0,3)

//console.log(testStr.substring(3,-9)); //Hel // here same concept start>end reverse then if start negative then assume 0.


const slicedFromEnd = testStr.slice(-6, -1);
//console.log(slicedFromEnd); // "Worl"
/* -6 represents the 6th character from the end (the space before "World").
-1 represents the character just before the exclamation mark. */


//Extracting the last n characters from a string:
const lastFive = testStr.slice(-5);
//console.log(lastFive); // "World" //counting start from 0 always remember


//substring is more forgiving and swaps indices if start is greater than end.
//substr takes a length parameter, making it suitable for extracting a fixed number of characters.
//slice is versatile and works well with negative indices for counting from the end of the string.

//console.log(testStr.toLowerCase()); 
//console.log(testStr.toUpperCase());


// console.log(testStr.charAt(4));
// console.log(testStr.indexOf('l'));
// console.log(testStr.search(/vam/));
// console.log(testStr.search("llo"));
// console.log(testStr.replace("Hello","bye"));

const strNew = "apple,banana,kiwi";
const fruits = strNew.split(",");
//console.log(fruits); // ["apple", "banana", "kiwi"]

const world = "    skk  "
console.log(world);
console.log(world.trim());