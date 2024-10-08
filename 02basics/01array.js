// array

const myarr = [1,"ali",true,undefined,null];
console.log(myarr);

const myarr1 = new Array(1,2,"balva",null)
console.log(myarr1);
console.log(myarr1[3]);


// array methods

myarr1.push(9);
myarr1.pop()
myarr1.unshift("asad")
myarr1.shift()

console.log(myarr1);
console.log(myarr1.includes(1));
console.log(myarr1.indexOf(null));

const newarr =myarr1.join()
console.log(newarr);
console.log(typeof newarr);
console.log(myarr1);

// slice and splice

const newa1 = [1,2,3,4,5];
console.log("A", newa1)

console.log(newa1.slice(1,3));
console.log("B" , newa1);


console.log(newa1.splice(1,3));
console.log("C" , newa1);



