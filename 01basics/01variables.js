const accountid = 1234;
let accountname = "Balva";
var accountemail = "hell@gmail.com";
accountcity = "ahmedabad";
let accountstate;

// accountid = 3232; // not allowed
accountname ="aliraza";
accountemail ="ali@gmail.com";
accountcity ="jaipur";

/*
prefer not use var.
because of issue in block scope and functional scope
*/
// console.log(accountid,accountemail,accountname,accountcity);
console.table([accountid,accountname,accountemail,accountcity,accountstate]);
