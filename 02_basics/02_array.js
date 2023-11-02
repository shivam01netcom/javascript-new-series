const marval_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

marval_heros.push(dc_heros);

//console.log(marval_heros);
//console.log(marval_heros[3][1]);


const marval_heros2 = ["thor2","ironman","spiderman"]
 const all_heros = marval_heros2.concat(dc_heros);
// console.log(marval_heros2);
// console.log(all_heros);
// console.log(typeof all_heros);
// console.log(all_heros[4])

//second way of concat in array(spread operator most important in js)

const all_new_heros = [...marval_heros2, ...all_heros];
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);


console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));

//console.log(Array.from({name:"Shivam"}));//ye jab array nahi bana payega to hmesa empty array dega means hme batana hoga ki keys ka array banaye ya value ka 

let score1 = 100;
let score2 = 200;
let score3 = 300;

//console.log(Array.of(score1,score2,score3));

