// generate random color 

const randomcolor = function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalid;
const startbgchange = function(){
  if(!intervalid){
    intervalid = setInterval(changecolor,1000)
}
  function changecolor(){
    document.body.style.backgroundColor = randomcolor();
  }
}

const stopbgchange = function(){
clearInterval(intervalid)
intervalid=null;
}
document.querySelector('#start').addEventListener('click',startbgchange);

document.querySelector('#stop').addEventListener('click',stopbgchange);