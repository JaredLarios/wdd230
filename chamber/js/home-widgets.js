/* wind chill */
const dSel = (e) => document.getElementById(e);
const windChill = (temp, speed) => {
    return (35.74 + 0.6215 * temp) - 35.75 * (speed ** 0.16) + 0.4275 * (temp * speed ** 0.16);
};

const farToCels = (far) => Math.round(((far - 32) * 5 / 9), -2);
const mphToKmh = (mph) => Math.round((mph * 1.609344), -2);

const temp = dSel('temp')
const clds = dSel('clouds')
const wSpeed = dSel('w-speed')
const wChill = dSel('w-chill')

const far = 45;
const mph = 5;

if (far <= 50 && mph > 3.0) {

    let cel = farToCels(far);
    let kmh = mphToKmh(mph);
    let wcll = Math.round(windChill(far, mph), -1);
    console.log(wcll)

    temp.textContent = cel;
    wSpeed.textContent = kmh;
    wChill.textContent = wcll;

}

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