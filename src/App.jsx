import axios from 'axios';
import { useState , useEffect} from 'react';

import CityInfo from './components/CityInfo';
import SearchBar from "./components/SeachBar";
import Card from './components/ForecastCard';
import Spinner from './components/Spinner';

import './App.css'

function App() {

  const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";

  const [actualCity, setActualCity] = useState("Viña del Mar");
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const [forecast, setForecast] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");

  function handleCurrentWeather(response) {
    setWeather({
        city: response.data.city,
        coordinates: response.data.coordinates,
        country: response.data.country,
        temperature: response.data.temperature.current,
        desc: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
        date: new Date(response.data.time * 1000) 
    });
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setActualCity(search);
    setLoading(true);
  }

  useEffect(() => {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${actualCity}&key=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleCurrentWeather);
  }, [actualCity, units]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setWeatherData({...weather, max: response.data.daily[0].temperature.maximum, min: response.data.daily[0].temperature.minimum})
    setLoading(false);
  }

  useEffect(() => {
    if (weather != null) {
      const ForecastApi = `https://api.shecodes.io/weather/v1/forecast?lon=${weather.coordinates.longitude}&lat=${weather.coordinates.latitude}&key=${apiKey}&units=${units}`
      axios.get(ForecastApi).then(handleForecast);
      
    }
  }, [weather]);

  if (forecast === null || loading === true) {
    return <Spinner/>
  } else {
  return (
      <div className='general-app'>
          <main className='forecast-section'>
              <SearchBar onChange={handleChange} onClick={handleClick}/>
              <div className='forecast-conteiner'>
                {forecast?.map((day, index) => {
                  return (
                    <Card key={index} units={units} date={new Date(day.time * 1000)} icon={day.condition.icon_url} desc={day.condition.description} max={day.temperature.maximum} min={day.temperature.minimum} wind={day.wind.speed} humidity={day.temperature.humidity}/>
                  )
                }).slice(1, 7)}
              </div>
          </main>
          {
            weatherData === null ? 
            <CityInfo setUnits={setUnits} city={"Loading"} country={"Loading..."} temperature={0} desc={"Loading..."} humidity={0} wind={0} icon={"Loading..."} date={new Date()}/>
            : 
            <CityInfo setUnits={setUnits} units={units} city={weatherData.city} country={weatherData.country} temperature={weatherData.temperature} desc={weatherData.desc} humidity={weatherData.humidity} wind={weatherData.wind} icon={weatherData.icon} date={weatherData.date} max={weatherData.max} min={weatherData.min}/>
          }
      </div>
    );
  }
}

export default App;
