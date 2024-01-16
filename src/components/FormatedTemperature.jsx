import { useState } from "react";
import "./CityInfo.css";

function FormatedTemperature ({setUnits, temperature}) {

    const [unit, setUnit] = useState(true);

    function handleCelsius () {
        setUnit(true);
        setUnits("metric");
    }

    function handleFarenheit () {
        setUnit(false);
        setUnits("imperial");
    }

    return (
        <div className="display-row">
            <h1> {Math.round(temperature)}</h1>
            <div className="format">
                <span className={unit ? "format-select" : "format-no-select"} onClick={handleCelsius}>°C</span>
                <span className="format-select">|</span>
                <span className={unit ? "format-no-select" : "format-select"} onClick={handleFarenheit}>°F</span>
            </div>
        </div>
    )
} export default FormatedTemperature;