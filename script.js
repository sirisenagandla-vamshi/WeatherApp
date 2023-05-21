const inputbox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

const locationNotFound = document.querySelector(".location-not-found");

const weatherBody = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "587e861e83f5df49da8133fdd521613e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) => response.json());
  
  if(weather_data.cod == "404")
  {
    locationNotFound.style.display ="flex";
    weatherBody.style.display ="none";
    console.log("error");
    return;
  }

  locationNotFound.style.display ="none";
  weatherBody.style.display = "flex";

  temperature.innerHTML =`${Math.floor(weather_data.main.temp - 237.15)}°C`;
  description.innerHTML =`${weather_data.weather[0].description}`
  humidity.innerHTML =`${weather_data.main.humidity}%`;
 wind.innerHTML =`${weather_data.wind.speed}Km/H`;
 //console.log(weather_data)
  

 switch(weather_data.weather[0].main)
 {
    case "Cloud" :
        weatherImg.src ="/assets/cloud.png";
        break;
    // case "404" :
    //     weatherImg.src ="/assets/404.png";
    //     break;
    case "Clear" :
        weatherImg.src ="/assets/clear.png";
        break;  
    case "Mist" :
        weatherImg.src ="/assets/mist.png";
        break;
    case "Snow" :
        weatherImg.src ="/assets/snow.png";
        break;          
 }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputbox.value);
});
