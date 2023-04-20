function getWeather(){
url = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=cloudcover";
   weatherData = loadJSON(url);

   console.log(weatherData);
}

