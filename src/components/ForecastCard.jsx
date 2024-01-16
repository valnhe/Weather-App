import "./ForecastCard.css"
import FormatedDateForecast from "./FormatedDateForecast";

function Card({units, date, icon, desc, max, min, wind, humidity}) {
    return (
        <article className="forecast-card">
            {date?<FormatedDateForecast date={date}/>:""}
            <img src={icon} alt={desc} />
            <div className="info-forecast">
                <section>
                    <div>
                        <span className="max-forecast">{Math.round(max)}°</span><span className="min-forecast">{Math.round(min)}°</span>
                    </div>
                    <h4>{desc}</h4>
                </section>
                <section className="wind-humidity-info">
                    <p>Wind: {Math.round(wind)} {units === "metric"? "km/h" : "mph"}</p>
                    <p>Humidity: {Math.round(humidity)}%</p>
                </section>
            </div>
        </article>
    )
} export default Card;