const apikey = "808595b14ca664826a464948c2c18e64";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = querySelector('.search input');
const serachbtn = querySelector('.search button')

async function checkweather (city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " KM/H";

}
serachbtn.addEventListener('click', ()=>{
    console.log(searchbox.value);
    
    checkweather(searchbox.value);
})


