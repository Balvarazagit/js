const randomnumber = parseInt((Math.random()*100+1));
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessfield')
const guessslot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastresult')
const lowori = document.querySelector('.loworhi')
const startover = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevguess =[];
let numguess = 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess);
        
        validateguess(guess)
    })
}

function validateguess(guess){
if(isNaN(guess)){
alert('please enter number')
}
else if(1 >= guess){
alert('please enter number greater than 1')
}
else if(100 <= guess){
    alert('please enter number less than 100')
    }
    else{
        prevguess.push(guess)
        if(numguess === 11){
            displayguess(guess)
            displaymessage(`game over . random number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
if(guess === randomnumber){
    displaymessage(`your guess is right`)
    endgame()
}elseif(guess < randomnumber){
    displaymessage(`you guess is tooo low`)
}elseif(guess > randomnumber){
    displaymessage(`you guess is tooo high`)
}
}
function displayguess(guess){
userinput.value = ''
guessslot.innerHTML += `${guess}`;
numguess++;
remaining.innerHTML = `${11-numguess}`;
}
function displaymessage(message){
    lowori.innerHTML = `<h2>${message}</h2>`;
}
function endgame(){

}
function startgame(){

}