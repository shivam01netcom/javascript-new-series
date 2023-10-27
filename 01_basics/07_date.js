
// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);//object

let myNewDateCreated = new Date(2023,0,24);//month start from zero
console.log(myNewDateCreated.toDateString());