import { useState , useEffect} from 'react';
import axios from 'axios';

import "./SearchBar.css";

function SearchBar ({city, setCity, setCountry, setTemperature, setDesc, setHumidity, setWind, setIcon}) {

    const key = "74cef3273f02bc7dco566fbta4fd0986";
    const [search, setSearch] = useState("Viña del Mar");

    function handleResponse(response) {
        setCity(response.data.city);
        setCountry(response.data.country);
        setTemperature(response.data.temperature.current);
        setDesc(response.data.condition.description);
        setHumidity(response.data.temperature.humidity);
        setWind(response.data.wind.speed);
        setIcon(response.data.condition.icon_url);
    }

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        const url = `https://api.shecodes.io/weather/v1/current?query=${search}&key=${key}`;
        axios.get(url).then(handleResponse);
    }

    useEffect(() => {
        const url = `https://api.shecodes.io/weather/v1/current?query=${search}&key=${key}`;
        axios.get(url).then(handleResponse);
      }, []);

    return (
        <form className="display-row" onChange={handleChange}>
            <input type="text" placeholder="Enter city" />
            <button type="submit" className="search-button" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </button>
            <button type="submit" className="current-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14.916 11.707a3 3 0 1 0 -2.916 2.293" />
                    <path d="M11.991 21.485a1.994 1.994 0 0 1 -1.404 -.585l-4.244 -4.243a8 8 0 1 1 13.651 -5.351" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M20.2 20.2l1.8 1.8" />
                </svg>
            </button>
        </form>
    )
} export default SearchBar;