//var c = 300;
let a = 300;
const b = 200;
if(true){
    let a= 10;
    const b = 20;
    console.log("Innera:",a);
    console.log("Innerb:",b);
}
console.log("global_a:",a);
console.log("global_b:",b);


function one(){
    const username = "shivam"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)

    two()
}
one();

// ++++++++++ interesting +++++++++++

console.log(addone(6));
function addone(value){
    return value+1;
}

console.log(addTwo(5));

const addTwo = function(value){
    return value + 2
}





