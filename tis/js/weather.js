const weather = {
    card: (e) => {
        const weartherCard = document.querySelector("#weather")
        const eMain = e.current;
        const eWeather = e.current.weather;

        const kelvinToFar = (kel) => Math.round(((kel - 273.15) * 9 / 5 + 32), -2);
        const farToCels = (far) => Math.round(((far - 32) * 5 / 9), -2);
        let tempF = kelvinToFar(eMain.temp) 
        let tempC = farToCels(tempF)

        weartherCard.innerHTML = `
        <img src="https://openweathermap.org/img/w/${eWeather[0].icon}.png">
        <div>
            <h3><span>${e.timezone.replace('America/','')}</span> City</h3>
            <p>Temperature: <span>${tempC}°C</span></p>
            <p>Humidity: <span>${eMain.humidity}</span></p>
            <p><span>${eWeather[0].description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</span></p>
        </div>
        `;
    },
    alert: (e) => {
        const weartherCard = document.querySelector("#alert");

        let alert = e.daily.alerts

        weartherCard.classList.add("show")

        weartherCard.innerHTML = `
            <h3>Allert <span>${alert.event}</span></h3>
            <p><span>${alert.tags}</span></p> 
        `
    }
}

export default weather