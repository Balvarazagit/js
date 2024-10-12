// for of loop
const myarr = [1,5,12,14]
for (const arr of myarr) {
    // console.log(`my arr is:${arr}`);
}
const mystring = "hello world!";
for(const mystr of mystring){
    if(mystr == " "){
        // console.log("space is here");
        
        continue;
    }
// console.log(`my string is ${mystr}`);
}

const map =new Map();
map.set('IN','India');
map.set('FR','France');
map.set('PAK','Pakisthan');

// console.log(map);

for(const [key,value] of map){
// console.log(key,":",value);
}

// const myobject = {
//     name : "ali",
//     id : 123,
//     logged : true
// }
// console.log( typeof myobject);

// for(const [key,value] of myobject){
// console.log(key,":",value);

// }

// for of loop not satisfy for object means not used