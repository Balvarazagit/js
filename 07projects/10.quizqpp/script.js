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
const quesbox = document.getElementById('quesbox')
const loadquestion = () => {
    const data = question[index];
    quesbox.innerHTML = `${index + 1}) ${data.que}`;
    
}
loadquestion()