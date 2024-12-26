const inputbox = document.querySelector('#input-box'); //input field
const listcontainer = document.querySelector('#list-container'); //ul
const button = document.querySelector('.row button'); // button
button.addEventListener('click',()=>{
    if(inputbox.value === ''){
        alert("You Must Write Somethings")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // inputbox.value ="";
    savedata();
})
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask(); 