import "./DailyCondition.css"

function DailyCondition () {
    return (
        <section className="dailyCondition">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10.708 2.372a2.382 2.382 0 0 0 -.71 .686l-4.892 7.26c-1.981 3.314 -1.22 7.466 1.767 9.882c2.969 2.402 7.286 2.402 10.254 0c2.987 -2.416 3.748 -6.569 1.795 -9.836l-4.919 -7.306c-.722 -1.075 -2.192 -1.376 -3.295 -.686z" strokeWidth="0" fill="currentColor" />
                </svg>
                <p>62%</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                    <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>
                <p>17 km/h</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 5l0 14" />
                    <path d="M16 9l-4 -4" />
                    <path d="M8 9l4 -4" />
                </svg>
                <p>20°C</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 5l0 14" />
                    <path d="M16 15l-4 4" />
                    <path d="M8 15l4 4" />
                </svg>
                <p>17°C</p>
            </div>
        </section>
    )
} export default DailyCondition;