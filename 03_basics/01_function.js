  function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
  }

  sayMyName;//referance of the function
  sayMyName();// aise karne se excute ho jayega function


function addTwoNumber(num1,num2){
    num1+num2;
}

const result = addTwoNumber(5,7);
//console.log("Result: ",result);





  function addTwoNumbers(num1,num2){
         // let result = num1 + num2;
          // return result;
              return num1+num2;
             console.log("shivam");
  }
const result2 = addTwoNumbers(3,5);
//console.log("Result2: ",result2);


function loginUserMessage(username){
    // if(username != undefined){
    // return `${username} just logged in`
    // }else{
    // return "please logged in";
    // }

    // if(username === undefined){
    //     console.log("Please enter a user name");
    //     return;
    // }
    // return `${username} just logged in`

    if(username){
        return `${username} just logged in`
    }
    console.log("Please enter a user name");
}

// console.log(loginUserMessage("shivam"));
// console.log(loginUserMessage());


function loginUserMessage3(username = "sam"){
    return `${username} just logged in`
}
// console.log(loginUserMessage3("shivamKeshari"));
// console.log(loginUserMessage3());

//rest operator
//note point rest and spread operator dono ko ... se hi karte h bas dono ke use cases alag alag h important

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,600,300));//[ 200, 600, 300 ]

//console.log(calculateCartPrice(200,600,300,8000));//[ 200, 600, 300,8000 ]



function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,600,300,700,1000));


const user = {
    username: "shivamm",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject?.username} and price is ${anyobject?.price}`)
}

//handleObject(user);

// handleObject({
//     username:"sj",
//     price:399
// })

const myNewArray = [200,400,100,300]

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,100,300]));