const inputbox = document.querySelector('.input-box');
const listcontainer = document.querySelector('.list-container');
const button = document.querySelector('.row button');
button.addEventListener('click',()=>{
    if(inputbox.value === ''){
        alert("You Must Write Somethings")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
    }
})