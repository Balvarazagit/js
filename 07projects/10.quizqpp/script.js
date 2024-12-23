const question = [
    {
    'que' : 'Which is last prophet?',
    'a':'prophet nuh a.s.',
    'b':'prophet isa a.s.',
    'c':'prophet muhammed s.a.v.',
    'd':'prophet musa a.s.',
    'correct': 'c'
},
{
    'que' : 'Which is first prophet?',
    'a':'prophet aadam a.s.',
    'b':'prophet isa a.s.',
    'c':'prophet muhammed s.a.v.',
    'd':'prophet musa a.s.',
    'correct': 'a'
},
{
    'que' : 'Which is kalimullah prophet?',
    'a':'prophet nuh a.s.',
    'b':'prophet isa a.s.',
    'c':'prophet muhammed s.a.v.',
    'd':'prophet musa a.s.',
    'correct': 'd'
},
]

let index =0;
let total = question.length;
let right = 0, wrong = 0; 
const quesbox = document.getElementById('quesbox'); 
const optioninput = document.querySelectorAll('.options');

const loadquestion = () => {
    if(index === total){
       return endquiz();
    }
    else{
        reset();
    }
    const data = question[index];
    quesbox.innerHTML = `${index + 1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerHTML = data.a; 
    optioninput[1].nextElementSibling.innerHTML = data.b;
    optioninput[2].nextElementSibling.innerHTML = data.c;
    optioninput[3].nextElementSibling.innerHTML = data.d;
}



document.querySelector('.btn').addEventListener('click', 
    submitquiz = ()=>{
    const data = question[index];
    const ans = getanswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
)

const getanswer = ()=>{
    let answer;
    optioninput.forEach(
       (input)=>{
        if(input.checked){
        answer = input.value;  
        }
       }
    )
    return answer;
}   

const reset = ()=>{
    optioninput.forEach(
        (input)=>{
         input.checked = false;
        }
     )
}

const endquiz = ()=>{
    document.getElementById('box').innerHTML = `
    <h3>Thank you playing the quiz</h3>
    <h2>${right} and ${wrong}</h2>
    `
}
loadquestion()