// for each loop
const prog= ["js","python","php","sql"]

prog.forEach((item) => {
    // console.log(item);
});
prog.forEach(function (val){
    // console.log(val);
})

function name(i){
    // console.log(i);
}
prog.forEach((name,index,arr)=>{
    // console.log(name,index,arr);
    
})
const myarr =[
    {
        language:"gujarati",
        shortform:"guj"
    },
    {
        language:"hindi",
        shortform:"hin"
    },
    {
        language:"english",
        shortform:"eng"
    },
]
myarr.forEach((item)=>{
console.log(item.shortform);

})