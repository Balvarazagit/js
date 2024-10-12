const prog =["js","php","java","ruby"]
const values = prog.forEach((item)=>{
// console.log(item);
return;
})
// console.log(values);

const num = [1,2,3,4,5,6,7,8,9,10];
const numval = num.filter((num)=>num>4);
// console.log(numval);

const newnum =[];
num.forEach((num)=>{
if(num > 4){
   newnum.push(num);
}
})
// console.log(newnum);

const books = [
    {
        title:"book1", genre : "friction",edition : 2000,puplished :2005 
    },
    {
        title:"book2", genre : "non-friction",edition : 2002,puplished :2006 
    },
    {
        title:"book3", genre : "history",edition : 2003,puplished :2007 
    },
    {
        title:"book4", genre : "science",edition : 2004,puplished :2008 
    },
    {
        title:"book5", genre : "friction",edition : 2005,puplished :2009 
    },
]

// const userbooks = books.filter((bk)=>bk.genre ==="friction")
 const userbooks = books.filter((bk)=>bk.puplished > 2005 && bk.genre == "science")

console.log(userbooks);
