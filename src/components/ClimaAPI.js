import React, { useState } from "react";
import axios from 'axios';
import "./page.css"


export default function ClimaAPI() {

const [data, setData] = useState({})
const [cidade, setCidade] = useState("")
const apiKey = "5a49d36a8131fb1cbb48926982621865";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;



const searchCidade = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setCidade("");
      })
      .catch((error) => {
        console.error("Ocorreu um erro inesperado:", error);
      });
  }
}

let country = "";
let flagUrl = "";

if (data && data.sys && data.sys.country) {
  country = data.sys.country;
  flagUrl = `https://flagsapi.com/${country}/flat/32.png`;
}


return (
  <div className="app">
    <div className="search">
      <input
        value={cidade}
        onChange={e => setCidade(e.target.value)}
        onKeyPress={searchCidade}
        placeholder="Digite a cidade"
        type="text" />
   

    <div className="buttonClima"> 
    <button onClick={searchCidade} type="button" class="btn btn-success">Pesquisar</button> 
    </div>
    </div>
    
    <div className="containerClima">

      <div className="topoClima">


          <h4> </h4> 
          <h4>{data.name} {country} &nbsp;<img src={flagUrl} />   </h4>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          {data.weather ? <h4>{data.weather[0].description}</h4> : null}
          
          
      </div>

      {data.name !== undefined &&
        <div className="finalClima"> 
            <h6>Sensação Térmica: {data.main.feels_like.toFixed()}°C </h6> 
            <h6> Humidade: {data.main.humidity}% </h6>
            <h6 >Vento: {data.wind.speed.toFixed()} km/h</h6>
          </div>
      }

    </div>
  </div>
);
}
