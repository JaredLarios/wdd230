const weather = {
    card: (e) => {
        const weartherCard = document.querySelector("#weather")
        const eMain = e.main
        const eWeather = e.weather
        weartherCard.innerHTML = `
            <h3><span>${e.name}</span></h3>
            <p><span>${eMain.temp}</span></p>
            <p><span>${eMain.humidity}</span></p>
            <p><span>${eWeather[0].description}</span></p>
            <img src="https://openweathermap.org/img/w/${eWeather[0].icon}.png">
        `
    },
}

export default weather