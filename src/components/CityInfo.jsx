import DailyCondition from "./DailyCondition";
import "./CityInfo.css";

function CityInfo () {
    return (
        <article className="display-col">
            <header className="display-row">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" />
                <div>
                    <p>Today</p>
                    <p>Sun 13, 11:00 a.m.</p>
                </div>
            </header>
            <section className="display-col">
                <div className="display-row">
                    <h1>28</h1>
                    <div className="format">
                        <span className="format-select">°C</span>
                        <span className="format-select">|</span>
                        <span className="format-no-select">°F</span>
                    </div>
                </div>
                <h2>Viña del Mar, CL</h2>
                <h3>Soleado</h3>
            </section>
            <DailyCondition />
        </article>
    )
} export default CityInfo;