import React, { useState, useEffect } from "react";

export default function WeatherData() {
  const apiKey = "87351461c2303b55b8f703aedb4e7b4a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=87351461c2303b55b8f703aedb4e7b4a&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  });

  return (
    <>
      <h1>React Weather App</h1>
      {weatherData && (
        <div>
          <p>Wind Speed: {weatherData.wind.speed}</p>
          <p>Weather Condition: {weatherData.weather[0].main}</p>
          <p>Wind Direction: {weatherData.wind.deg}</p>
          <p>Wind Direction: {weatherData.main.temp}</p>
          <p>Wind Direction: {weatherData.main.feels_like}</p>
          <p>Wind Direction: {weatherData.main.humidity}</p>
          <p>
            Country: {weatherData.sys.country}, {weatherData.name}
          </p>
        </div>
      )}
    </>
  );
}
