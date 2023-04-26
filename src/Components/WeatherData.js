import React, { useState, useEffect } from "react";
import "./WeatherData.css";

export default function WeatherData() {
  const apiKey = "87351461c2303b55b8f703aedb4e7b4a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=87351461c2303b55b8f703aedb4e7b4a&units=imperial&wind_units=mph`;

  const [weatherData, setWeatherData] = useState(null);
  const [weatherImg, setWeatherImg] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  });

  useEffect(() => {
    if (weatherData) {
      switch (weatherData.weather[0].main) {
        case "Thunderstorm":
          setWeatherImg("/img/stormy.png");
          break;
        case "Drizzle":
          setWeatherImg("/img/drzzle.png");
          break;
        case "Rain":
          setWeatherImg("/img/rain.png");
          break;
        case "Snow":
          setWeatherImg("https://www.example.com/snow.jpg");
          break;
        case "Clear":
          setWeatherImg("https://www.example.com/clear.jpg");
          break;
        case "Clouds":
          setWeatherImg("/img/cloudy.png");
          break;
        case "Haze":
          setWeatherImg("/img/haze.png");
          break;
        default:
          setWeatherImg("https://www.example.com/default.jpg");
          break;
      }
    }
  }, [weatherData]);

  return (
    <>
      <h1>React Weather App</h1>
      <div className="wrapper">
        {weatherData && (
          <div className="main__wrapper">
            <img src={weatherImg} alt={weatherData.weather[0].main} />
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
            <p>Weather Condition: {weatherData.weather[0].main}</p>
            <p>Wind Direction: {weatherData.wind.deg}</p>
            <p>Temperature: {weatherData.main.temp}F</p>
            <p>Temperature Feels Like: {weatherData.main.feels_like}F</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>
              Country: {weatherData.sys.country}, {weatherData.name}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
