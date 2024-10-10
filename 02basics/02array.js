let alphabet = ["A","B","C","D"]
let number = [1,2,3,4]
// console.log(alphabet.push(number));
// console.log(alphabet);

// console.log(alphabet.concat(number));

// spread array
console.log([...alphabet,...number]);

// flat array
let anotherarray = [1,2,[3,4],5,6,[7,8,[9,10]]];
console.log(anotherarray);
let newarray = anotherarray.flat(Infinity)
console.log(newarray);

console.log(Array.isArray("ali"));
console.log(Array.from("ali"));

let score1 = 20;
let score2 = 30;
let score3= 40;

console.log(Array.of(score1,score2,score3));


