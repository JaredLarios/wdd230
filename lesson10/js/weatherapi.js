const url = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&APPID=1fc2f1cda26c5b2888cee907631c3fa7'

fetch(url)
    .then( response => response.json())
    .then(
        jsObject => {
            console.log(jsObject)
            document.querySelector('#current-temp').textContent = jsObject.main.temp;
            document.querySelector('#max-temp').textContent = jsObject.main.temp_max;
            document.querySelector('#min-temp').textContent = jsObject.main.temp_min;
            const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
            const desc = jsObject.weather[0].description;
            document.querySelector('#icon-src').textContent = iconsrc;
            document.querySelector('#weathericon').setAttribute('src', iconsrc);
            document.querySelector('#weathericon').setAttribute('alt', desc);
            document.querySelector('figcaption').textContent = desc;
        }
    )
