import DailyCondition from "./DailyCondition";
import "./CityInfo.css";

function CityInfo ({city, country, temperature, desc, humidity, wind, icon}) {
    return (
        <article className="display-col">
            <header className="display-row">
                <img src={icon} alt={desc} />
                <div>
                    <p>Today</p>
                    <p>Sun 13, 11:00 a.m.</p>
                </div>
            </header>
            <section className="display-col">
                <div className="display-row">
                    <h1>{Math.round(temperature)}</h1>
                    <div className="format">
                        <span className="format-select">°C</span>
                        <span className="format-select">|</span>
                        <span className="format-no-select">°F</span>
                    </div>
                </div>
                <h2>{city}, {country}</h2>
                <h3>{desc}</h3>
            </section>
            <DailyCondition humidity={humidity} wind={wind} />
            <p> <a href="https://github.com/valnhe/Weather-App">Open-source</a>, by <a href="https://github.com/valnhe" rel="noreferrer" target="_blank">Valentina Castillo</a></p>
        </article>
    )
} export default CityInfo;