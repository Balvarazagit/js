// Dates
const dt = new Date();

// console.log(typeof dt);

// console.log(dt);
// console.log(dt.toString());
// console.log(dt.toDateString());
// console.log(dt.toISOString());
// console.log(dt.toJSON());
// console.log(dt.toLocaleDateString());
// console.log(dt.toLocaleString());
// console.log(dt.toString());
// console.log(dt.toTimeString());

// // let mydate = new Date(2024 , 0 ,29 ,22 ,11);
// // let mydate = new Date(2024 ,2,30);
// // // let mydate = new Date("2024-01-12");
// let mydate = new Date("03-03-2003")
// console.log(mydate.toLocaleDateString());

let mydate =Date.now()
// // console.log(mydate.getTime());

// console.log(mydate);
// console.log(Math.floor(Date.now()/1000));

console.log((mydate.toLocaleString('dafault',{
    weekday:"long",
})))

