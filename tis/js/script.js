import Base from "./base.js"
const url = "https://jaredlarios.github.io/wdd230/tis/temples/data/temples.json"

fetch(url)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            console.log(jsObject.temples)
            const templesList = jsObject.temples

            let randomTemple = templesList[Math.floor(Math.random()*templesList.length)].image;
            console.log(randomTemple)

            

            Base.scroll()
            Base.menu()
            Base.lazzy()
            Base.favoriteTemples(randomTemple)
            Base.footer()
        }
    )