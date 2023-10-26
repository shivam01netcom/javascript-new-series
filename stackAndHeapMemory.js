//+++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non Primitive)
//stack me hme copy milta h, and heap me referance ka concept aata h 

let email = "shivam@gmail.com";
let updatedEmail = email;
updatedEmail = "sk@google.com";

console.log(email);
console.log(updatedEmail);

let firstUser = {
    name:"shivam Kumar",
    email:"sk@gmail.com"
}

let secondUser = firstUser;
secondUser.email = "shivamkeshari@google.com"

console.log(firstUser.email);
console.log(secondUser.email);

