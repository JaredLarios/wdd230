const url = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&APPID=1fc2f1cda26c5b2888cee907631c3fa7'

fetch(url)
    .then( response => response.json())
    .then(
        jsObject => {
            console.log(jsObject)
        }
    )
