const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=7dfeb82ceccbf36c5ba3751b2bef884c`;
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchBtn");

async function fetchWeather(newApi) {
  try {
    const response = await fetch(newApi);
    if(response.status === 404){
      alert("City not found. Please enter a valid city name.");
      return ;
    }
    const data = await response.json();
    let temp = data.main.temp;
    temp = Math.round((temp - 273));
    let clouds = data.weather[0].main
    document.querySelector(".temperature").innerHTML = temp + "°c";

    document.getElementById("cityName").innerHTML = data.name;
    document.querySelector(".condition").innerHTML = data.weather[0].main;
    document.querySelector("#humidityDisplay").innerHTML = data.main.humidity + "%";
    document.querySelector("#windDisplay").innerHTML = Math.round(data.wind.speed) + " km/h";
    document.querySelector("#feelsDisplay").innerHTML = Math.round((data.main.feels_like - 273)) + "°c";

    if (clouds === "Clouds") {
      document.querySelector("#weatherIcon").innerHTML = "☁️";
    }
    else if (clouds === "Clear") {
      document.querySelector("#weatherIcon").innerHTML = "☀️";
    }
    else if (clouds === "Rain") {
      document.querySelector("#weatherIcon").innerHTML = "🌧️";
    }
    else if (clouds === "Snow") {
      document.querySelector("#weatherIcon").innerHTML = "❄️";
    }
    else if (clouds === "Thunderstorm") {
      document.querySelector("#weatherIcon").innerHTML = "⛈️";
    }
    else if(clouds ==="Mist" || clouds === "Fog" || clouds === "Haze"){
      document.querySelector("#weatherIcon").innerHTML = "🌫️";
    }
    else if(clouds === "Drizzle"){
      document.querySelector("#weatherIcon").innerHTML = "🌦️";
    }
    else if(clouds === "Smoke"|| clouds === "Dust" || clouds === "Sand" || clouds === "Ash"){
      document.querySelector("#weatherIcon").innerHTML = "🌫️";
    }
  }

  catch (error) {
    alert("An error occurred while fetching weather data. Please try again later.");
  }


}
searchButton.addEventListener("click", ()=>{
  const city = cityInput.value.trim();
  if(city){
    const newApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7dfeb82ceccbf36c5ba3751b2bef884c`;
    fetchWeather(newApi);
  }
})


