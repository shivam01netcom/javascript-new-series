
// "this"  current context ko access karta h
const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this);
    },
    
}

console.log(user.welcomeMessage)
user.welcomeMessage();

user.username = "saam";
user.welcomeMessage();
console.log(this);  // hm yaha node environment me dekh rahe h isiliye empty object aa raha yahi agar browser me dekhenege tab vaha this keyword global object(window) ko refer karta h jo ki "window" hota h 


function chai(){
   
    console.log(this);// yaha par function ke andar this , kisi global ko refre karta h not window
}

chai();

function chaiwithcode(){
    let user = "samm";
    console.log(this.samm);// here undefined bcoz yaha this ka current context koi global h and isme use ye user nahi mila 
}
chaiwithcode();

//++++++++ arrow function +++++++++++++

//also called explicite arrow function

const arrowFunction = () => {
    let username = "hitesh"
    console.log(this);// arrow function ke andar this keyword defined nahi h simple {} empty object deta h
}
arrowFunction();

// implicite arrow function jisme curly braces use nahi karte and return keyword bhi nahi likhte

const addThree = (num1,num2,num3) => num1+num2+num3;
console.log(addThree(1,2,3));

//note point important curly bracess me agar likha to return keyword likhna pdhega and yadi paranthesis me likha () to return keyword ki jarurat nahi h 

const addThree3 = (num1,num2,num3) => (num1+num2+num3);
console.log(addThree3(1,2,3));

//note ab yaho object return karna ho tab hme () paranthesis ke andar curly braces use klarna hota h 
const addfoo = () => ({username:"shivam",pin:232234})
console.log(addfoo());



const addfoo2 = () => {return {username:"shivam",pin:232234}}
console.log(addfoo2());







//definition 
//The this keyword in JavaScript is a special variable that is automatically defined in the scope of every function. Its value is determined by how the function is called, and it provides a way to refer to the current execution context. The behavior of this can be a bit tricky and varies depending on how a function is invoked.


//Arrow functions behave differently regarding this. Unlike regular functions, arrow functions do not have their own this. Instead, they inherit this from the enclosing scope. In this case, since there is no enclosing function, this in the arrow function refers to the this value of the containing scope (which is usually the global context). However, if the arrow function is inside another function, it will inherit this from that function.

//So, to summarize, the behavior of the this keyword in JavaScript depends on how a function is invoked. Regular functions have their own this context, while arrow functions inherit this from their enclosing scope.








