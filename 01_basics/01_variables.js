 const accountId = 1234;
 let accountName = "shivam";
 var accountCity = "Kolkata";
 accountEmail = "sk@gmail.com";

//  accountId = 234; // not allowed

accountName = "shivam keshari";
accountCity = "Allahabad";
accountEmail = "sk@332gmail.com";
let address;

/*
prefer not to use var
bacause of issue in block scope and functional scope
 */

 console.log(accountId);
 console.table([accountId,accountName,accountCity,accountEmail,address]);
 console.log(typeof accountEmail);