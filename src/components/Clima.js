import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clima = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    const apiKey = '5a49d36a8131fb1cbb48926982621865';
    const cidade = 'Rio de Janeiro';
    const pais = 'BR';

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao atualizar a previsão do tempo', error);
      });
  }, []);

  if (!weatherData) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Agora em: {weatherData.name}, {weatherData.sys.country}</h2>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Sensação Térmica: {weatherData.main.feels_like}°C</p>
      <p>Clima: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Clima;
