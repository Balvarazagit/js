let currentplayer = "X";
let arr = Array(9).fill(null);

function checkwinner(){
    if(
        (arr[0]==arr[1] && arr[1]==arr[2]) || 
        (arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2]==arr[4] && arr[4]==arr[6]) 
    ){
        console.log(currentplayer);
        
    }       
}

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