const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = mynumbers.map((num)=>{
//     return num*2
// })
// console.log(newnum);

const newnums = mynumbers
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num >= 50)

console.log(newnums);
