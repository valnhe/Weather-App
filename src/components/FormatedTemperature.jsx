import { useState } from "react";
import "./CityInfo.css";

function FormatedTemperature ({temperature}) {
    const [unit, setUnit] = useState(true);

    const farenheit = () => {
        return Math.round((temperature * 9) / 5 + 32);
    }

    function handleCelsius () {
        setUnit(true);
    }

    function handleFarenheit () {
        setUnit(false);
    }

    return (
        <div className="display-row">
            <h1>{unit ? Math.round(temperature): farenheit()}</h1>
            <div className="format">
                <span className={unit ? "format-select" : "format-no-select"} onClick={handleCelsius}>°C</span>
                <span className="format-select">|</span>
                <span className={unit ? "format-no-select" : "format-select"} onClick={handleFarenheit}>°F</span>
            </div>
        </div>
    )
} export default FormatedTemperature;