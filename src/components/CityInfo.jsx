import DailyCondition from "./DailyCondition";
import FormatedDate from "./FormatedDate";
import FormatedTemperature from "./FormatedTemperature";	
import "./CityInfo.css";

function CityInfo ({city, country, temperature, desc, humidity, wind, icon, date}) {
    return (
        <article className="city-info">
            <header className="display-row">
                <img src={icon} alt={desc} />
                <div>
                    <p>Today</p>
                    <FormatedDate date={date}/>
                </div>
            </header>
            <section className="display-col">
                <FormatedTemperature temperature={temperature} />
                <h2>{city}, {country}</h2>
                <h3>{desc}</h3>
            </section>
            <DailyCondition humidity={humidity} wind={wind} />
            <p className="open-source"> <a href="https://github.com/valnhe/Weather-App" rel="noreferrer" target="_blank">Open-source</a>, by <a href="https://github.com/valnhe" rel="noreferrer" target="_blank">Valentina Castillo</a></p>
        </article>
    )
} export default CityInfo;