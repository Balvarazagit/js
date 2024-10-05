const str = "balva";
const repo = 45;

console.log(`my name is ${str} and repo is ${repo}`);

const str1 = new String('balva')
console.log(str1.__proto__)

console.log(str1.length);
console.log(str1.toUpperCase());

//which position at character located in string then use charAt()
console.log(str1.charAt(3));

//character is which position located in string then use indexOf()
console.log(str1.indexOf('v'));

// substring method in not execute negative index means str1.subString(-5,3);
console.log(str1.substring(2,5));

// slice() method in execute negative index
console.log(str1.slice(-3,3));

// trim() is remove white space before and after in string,
// trimStart() is remove whitespace only before in string,
// trimEnd() is remove whitespace only after in string.
const nwestr ="         hi        "
console.log(nwestr);
console.log(nwestr.trim());
console.log(nwestr.trimStart());
console.log(nwestr.trimEnd());

// replace() method
const url = "https//dotit.io%393.com"
console.log(url);
console.log(url.replace("%393","-"));

// includes() method
console.log(url.includes("dotjjit"));

// split() method => split(separator,limit)
console.log(url.split('',3))