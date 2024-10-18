const form = document.querySelector('form');
console.log("hello");

form.addEventListener('submit',function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

if(height === ' ' || isNaN(height) ||height < 0){
    result.innerHTML = `please give me valid height ${height}`;
}
else if(weight === ' ' || isNaN(weight) || weight<0){
    result.innerHTML = `please give me valid weight ${weight}`;
}
else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
   result.innerHTML = `Result is ${bmi}`

   const result1 = document.querySelector('#result1');

if(bmi <= 18.6){
result1.innerHTML = `You are bmi is under weight : ${bmi}`
}
else if(bmi <= 24.9){
result1.innerHTML = `You are bmi is normal : ${bmi}`
}
else if(bmi > 24.9){
result1.innerHTML = `You are bmi is over weight : ${bmi}`
}
}

})