const url = 'http://api.openweathermap.org/data/2.5/weather?q=Guatemala&APPID=7f554438855760396460305b4e229983'
/* wind chill */

const dSel = (e) => document.getElementById(e);
const windChill = (temp, speed) => {
    return (35.74 + 0.6215 * temp) - 35.75 * (speed ** 0.16) + 0.4275 * (temp * speed ** 0.16);
};

fetch(url)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            console.log(jsObject)
            const farToCels = (far) => Math.round(((far - 32) * 5 / 9), -2);
            const kelvinToFar = (kel) => Math.round(((kel - 273.15) * 9/5 + 32), -2);

            
            const mphToKmh = (mph) => Math.round((mph * 1.609344), -2);

            // --- Getting the information from the API  ---
            let kel = jsObject.main.temp;
            let far = kelvinToFar(kel)
            let mph = jsObject.wind.speed;
            const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
            const desc = jsObject.weather[0].description;
            
            if (far >= 50 && mph > 3.0) {
                
                let cel = farToCels(far);
                console.log(cel)
                let kmh = mphToKmh(mph);
                let wcll = Math.round(windChill(far, mph), -1);
                console.log(wcll)

                dSel('temp').textContent = cel+'°C';
                dSel('caption').textContent = "test";
                dSel('w-speed').textContent = kmh;
                dSel('w-chill').textContent = wcll;
                dSel('caption').textContent = desc;
                dSel('weather-icon').setAttribute('src', iconsrc);
                dSel('weather-icon').setAttribute('alt', desc);

            }
        }
    )

/* Slide Show*/

window.addEventListener('load', () => {
    console.log('loaded items');
    const images = ['images/chamber.jpg', 'images/chamber-2.jpg', 'images/chamber-3.jpg', 'images/wdd230-org.jpg'];
    const responsive = [
        'images/chamber200.jpg 200w, images/chamber500.jpg 500w, images/chamber800.jpg 800w',
        'images/chamber-2-200.jpg 200w, images/chamber-2-500.jpg 500w, images/chamber-2-800.jpg 800w',
        'images/chamber-3-200.jpg 200w, images/chamber-3-500.jpg 500w, images/chamber-3-800.jpg 800w',
        'images/wdd230-org200.jpg 200w, images/wdd230-org500.jpg 500w, images/wdd230-org800.jpg 800w'
    ];
    let indexImage = 0;

    const slideShow = () => {

        document.querySelector('#slide').setAttribute('src', images[indexImage])
        document.querySelector('#slide').setAttribute('srcset', responsive[indexImage])

        if (indexImage < 3) {
            indexImage++;
        } else {
            indexImage = 0;
        }
    }
    setInterval(slideShow, 2 * 3600);
});
