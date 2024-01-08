import { useState } from 'react';

import CityInfo from './components/CityInfo';
import SearchBar from "./components/SeachBar";

import './App.css'

function App() {

  const [city, setCity] = useState("Loading...");
  const [country, setCountry] = useState("Loading...");
  const [temperature, setTemperature] = useState("Loading...");
  const [desc, setDesc] = useState("Loading...");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  return (
    <div className='general-app'>
      <main className='forecast-section'>
          <SearchBar city={city} setCity={setCity} setCountry={setCountry} setTemperature={setTemperature} setDesc={setDesc} setHumidity={setHumidity} setWind={setWind} setIcon={setIcon}/>
          <h1>Weekly Forecast-</h1>
      </main>
      <CityInfo city={city} country={country} temperature={temperature} desc={desc} humidity={humidity} wind={wind} icon={icon}/>
    </div>
  )
}

export default App;
