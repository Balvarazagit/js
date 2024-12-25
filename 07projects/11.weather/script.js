const apikey = "808595b14ca664826a464948c2c18e64";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input');
const serachbtn = document.querySelector('.search button');
const weather_icon = document.querySelector('.weather-icon')

async function checkweather (city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " KM/H";

    if(data.weather[0].main == 'Clouds'){
     weather_icon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
    }
    else if(data.weather[0].main == 'Clear'){
 weather_icon.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png"
    }
    else if(data.weather[0].main == 'Rain'){
      weather_icon.src ="https://cdn-icons-png.flaticon.com/512/4834/4834585.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weather_icon.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R9YnnLIOaCHGuJJZTMSAm-yy_WNIqiqHAg&s"
    }
    else if(data.weather[0].main == 'Mist'){
        weather_icon.src ="https://cdn-icons-png.flaticon.com/512/1197/1197102.png"
    }

}
serachbtn.addEventListener('click', ()=>{ 
    checkweather(searchbox.value);
})


