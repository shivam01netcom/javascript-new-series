//const tinderUser = new Object(); //this is singleton object

const tinderUser = {} // this is not singleton object

//console.log(tinderUser);

tinderUser.id = "123er";
tinderUser.name = "dame"
tinderUser.isloggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "shh@google.com",
    fullname: {
        userfullname: {
            name: "Shivam Keshari"
        }
    }
}
//console.log(regularUser.fullname.userfullname.name);

//console.log(regularUser?.fullname?.userfullname?.name); //suppose api se response aa raha jisme full name nahi h tab ya to har jagh if else lagao ya aise ? laga do this is very good approach


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

 const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({},obj1, obj2)//line32 and 33 both are same but line 33 is good practice and one major difference h ki line32 me sari value obj1 me ja rahi h and line 33 me {} ye dene se ab sari value isme store ho rahi h important
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3 === obj1);//true
// console.log(obj4 === obj1);//false


//note but hm mostly spread operator hi use karenge (line33 vala bhi bahut kam use karenge bcoz spread operator more handy)

const obj5 = {...obj1,...obj2};
//console.log(obj5);


const users = [
    {
        id: 1,
        email: "sh@gmail.com"
    },
    {
        id: 2,
        email: "shi@gmail.com"
    },  
    {
        id: 3,
        email: "shiv@gmail.com"
    },
]

// console.log(users[1].id);
// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isloggedIn' ]

console.log(Object.values(tinderUser));//[ '123er', 'dame', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '123er' ], [ 'name', 'dame' ], [ 'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isloggedIn"))//true