let currentplayer = "X";
let arr = Array(9).fill(null);



function handleclick(e){
    const id = Number(e.id);
   arr[id] = currentplayer;
   e.innerText = currentplayer;
   if(currentplayer === "X"){
    currentplayer = "O"
   }
   else{
    currentplayer = "X"
   }
   
   
    
}