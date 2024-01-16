import "./ForecastCard.css"

function Card() {
    return (
        <article className="forecast-card">
            <p>Mon 13</p>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" />
            <div className="info-forecast">
                <section className="display-col">
                    <div>
                        <span className="max-forecast">21°</span><span className="min-forecast">13°</span>
                    </div>
                    <h4>Sunny</h4>
                </section>
                <section className="wind-humidity-info">
                    <p>Wind: 13 km/h</p>
                    <p>Humidity: 13%</p>
                </section>

            </div>
        </article>
    )
} export default Card;