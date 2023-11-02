 //array

 const arr1 = [0,1,2,3,5];
 const arr2 = ["saktiman","marval","DC"];

 const arr3 = new Array("1",2,"Books");


 //console.log(arr3);

 //Array methods
 arr1.push(4);
//  console.log(arr1);
//  console.log(arr1.length);

 arr1.pop()
//console.log(arr1);

arr1.unshift(9);// yah suru me value add karta h but not use kyu ki isase computer par load aata h becoz sari value shift karni hoti h
//console.log(arr1);

arr1.shift();//like a pop method but yah suru se hatata h 
//console.log(arr1);

// console.log(arr1.includes(2));
// console.log(arr1.includes(9));

// console.log(arr1.indexOf(9));
// console.log(arr1.indexOf(3));

const newArr = arr1.join();

// console.log(arr1);
// console.log(newArr);
// console.log(typeof newArr);

//slice , splice(difference b/w slice and splice very important )
console.log("A",arr1);

const myn1 = arr1.slice(1,3);

console.log(myn1);
console.log("B",arr1);

const myn2 = arr1.splice(1,3);

console.log(myn2);
console.log("C",arr1);

//slice array ko mutate nahi karta jabki splice original array ko mutate kar deta h 