import { useState } from 'react';

import CityInfo from './components/CityInfo';
import SearchBar from "./components/SeachBar";

import './App.css'

function App() {

  const [weather, setWeather] = useState(null);

  return (
    <div className='general-app'>
      <main className='forecast-section'>
          <SearchBar setWeather={setWeather}/>
          <h1>Weekly Forecast-</h1>
      </main>
      {
        weather === null ? 
        <CityInfo city={"Loading"} country={"Loading..."} temperature={0} desc={"Loading..."} humidity={0} wind={0} icon={"Loading..."} date={new Date()}/>
        : 
        <CityInfo city={weather.city} country={weather.country} temperature={weather.temperature} desc={weather.desc} humidity={weather.humidity} wind={weather.wind} icon={weather.icon} date={weather.date}/>
      }
    </div>
  )
}

export default App;
