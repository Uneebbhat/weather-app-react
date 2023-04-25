import React, { useState, useEffect } from "react";

export default function WeatherData() {
  const apiKey = "87351461c2303b55b8f703aedb4e7b4a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  });

  return (
    <>
      <h1>Hello World!</h1>
      {weatherData && (
        <div>
          <p>Wind Speed: {weatherData.wind.speed}</p>
          <p>Wind Direction: {weatherData.wind.deg}</p>
        </div>
      )}
    </>
  );
}
