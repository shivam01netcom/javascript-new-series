//singleton
//Object.create

//object literals


const mySym = Symbol("key1");

const JsUser = {
    "full name":"Shivam Keshari",
    [mySym] : "key11",//important how to use symbol as a key in object
    name:"Shivam",
    age:22,
    location:"Ramgarh",
    email:"sk@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Friday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email= "shivam@google.com";

//Object.freeze(JsUser);
JsUser.email = "test@gmail.com";

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Learner");
}

console.log(JsUser.greeting);//undefined aa raha bcoz uper hmne object ko freeze kar diya h use comment karke dekhte h ab output
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.age}`)
}


JsUser.greetingTwo();

console.log(JsUser.greetingTwo());
//hello Js user, 22
//undefined
//ye dono aayega bcoz console karne par undefined aa raha