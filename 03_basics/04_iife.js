// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB connected");
})();

//global scope ke pollution (vaha jo bhi variable h) ko hatane ke liye hm iife ka use karte h 

( () => { return console.log("DB connected2")})();


( () => (console.log("DB connected3")))();


//named iife that means function ka name chaiaurcode h yaha 
(function chaiaurcode(){
    console.log("DB connected 5")
})();

//note point in tino cases 9 , 12 14 ke case me iife likhte time alsways last me semicolon; jarur lagana hota h nahi to error aa jata h