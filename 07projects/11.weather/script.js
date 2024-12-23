const apikey = "808595b14ca664826a464948c2c18e64";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=india";

async function checkapi (){
    const response = await fetch(apiurl + `&appid=${apikey}`)
    const data = response.json();
    console.log(data);
    
}
checkapi()