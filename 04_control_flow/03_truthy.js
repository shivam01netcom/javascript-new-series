const userEmail = "sk@gmail.com";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email"); 
}

//falsy value
//false , 0 , -0, 0n , "" , null, undefined, NaN

//truly value
// [],true,"0",'false'," ",{},function(){},aur sare values falsy values ko chorrkar



const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("check empty object"); 
}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15

//val1 = null ?? 10 ?? 20
console.log("val1",val1);