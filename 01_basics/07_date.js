
// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

//console.log(typeof myDate);//object

let myNewDateCreated = new Date(2023,0,24);//month start from zero
//console.log(myNewDateCreated.toDateString());

let myDateCreated = new Date(2023,0,24,5,3);

//console.log(myDateCreated.toLocaleString());

let NewDateCreated = new Date("2023-10-31");//yy-mm-dd
//console.log(NewDateCreated.toLocaleString());

let NewDateCreated22 = new Date("10-31-2024");//mm-dd-yy
//console.log(NewDateCreated22.toLocaleString());


let myTimestamp = Date.now();

//console.log(myTimestamp);//1698728811024  yah (01 jan 1970 se abhi tak ka time h millisecond me)


let checkTimeStamp = new Date("10-30-2023")//mm-dd-yy
//console.log(checkTimeStamp.getTime());//isase 01 jan 1970 se jo ye date("10-30-2023")h yaha tak mili second me time bata diya

//console.log(myTimestamp-checkTimeStamp.getTime());


//console.log(Date.now());// ye to millisecond me abhi tak ka time dega but hme second me chahiye tab

//console.log(Math.floor(Date.now()/1000));//ab 01jan1970se abhi tak ka time second me dikhega

let checkDate = new Date();
// console.log(checkDate);
// console.log(checkDate.getMonth());//ye month ko 0 se count karta h 
// console.log(checkDate.getFullYear());

checkDate.toLocaleString('default',{weekday:"long"});

//console.log(checkDate.toLocaleString('default',{weekday:"long"}));