import Base from "./base.js"
import weather from "./weather.js"

const url = "https://jaredlarios.github.io/wdd230/tis/temples/data/temples.json"
const urlWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=14.6407&lon=-90.5133&exclude=minutely&appid=862fee3919d923879c6028ea877368b0"

fetch(url)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            console.log(jsObject.temples)
            const templesList = jsObject.temples
            const btnLink = document.querySelector(".join button")

            let randomTemple = templesList[Math.floor(Math.random()*templesList.length)].image;
            let randomFavTemple = localStorage.getItem("favoriteTemples")
            let templeImage = localStorage.getItem("favTempleImg")
            
            console.log(randomTemple)       

            Base.scroll()
            Base.menu()
            Base.lazzy()
            Base.favoriteTemples(randomTemple)
            Base.favTemnpleCard(randomFavTemple, templeImage)
            Base.footer()

            btnLink.addEventListener("click", ()=> location.href = "reservations/reserve.html")
        }
    )

fetch(urlWeather)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            console.log(jsObject)
            weather.card(jsObject)

            // Alerts don't alowed in Guatemala
            /*weather.alert(jsObject)*/
        }
    )