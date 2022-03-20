const url = 'https://api.openweathermap.org/data/2.5/weather?q=Guatemala&APPID=7f554438855760396460305b4e229983'
const url2 = 'https://jaredlarios.github.io/wdd230/chamber/directory/data/directory.json'
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
            const kelvinToFar = (kel) => Math.round(((kel - 273.15) * 9 / 5 + 32), -2);


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

                dSel('temp').textContent = cel + '°C';
                dSel('caption').textContent = "test";
                dSel('w-speed').textContent = kmh;
                dSel('w-chill').textContent = wcll;
                dSel('caption').textContent = desc;
                dSel('weather-icon').setAttribute('src', iconsrc);
                dSel('weather-icon').setAttribute('alt', desc);

            }
        }
    )
    .then(
        () => {
            /* Slide Show*/
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

        }
    )

fetch(url2)
    .then((response) => response.json())
    .then(
        (obj) => {
            console.log(obj);

            
            
            /*get a random number*/
            const len = obj.directory.length
            let randChoice1 = Math.floor(Math.random() * len);
            console.log(randChoice1)
            let randChoice2 = Math.floor(Math.random() * len);
             
            /* Fill stages */

            const header1 = document.querySelector(".stage1h")
            const info1 = document.querySelector(".stage1p")
            const img1 = document.querySelector(".stage1-img")
            
            const header2 = document.querySelector(".stage2h")
            const info2 = document.querySelector(".stage2p")
            const img2 = document.querySelector(".stage2-img")

            header1.textContent = obj.directory[randChoice1].name
            info1.innerHTML = `${obj.directory[randChoice1].address} <br> ${obj.directory[randChoice1].phone}`
            img1.setAttribute("src", obj.directory[randChoice1].photo)

            header2.textContent = obj.directory[randChoice2].name
            info2.innerHTML = `${obj.directory[randChoice2].address} <br> ${obj.directory[randChoice2].phone}`
            img2.setAttribute("src", obj.directory[randChoice2].photo)
        }
    )