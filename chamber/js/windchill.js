const weather = {
    display: () => {
        const dSel = (e) => document.getElementById(e);
        const windChill = (temp, speed) => {
            return (35.74+0.6215*temp)-35.75*(speed**0.16)+0.4275*(temp*speed**0.16);
        };
        const farToCels = (far) => Math.round(((far - 32) * 5/9), -2);
        const mphToKmh = (mph) => Math.round((mph *1.609344), -2);

        const temp = dSel('temp')
        const clds = dSel('clouds')
        const wSpeed = dSel('w-speed')
        const wChill = dSel('w-chill')

        const far = 45;
        const mph = 5;

        if ( far <= 50 && mph > 3.0) {
            let cel = farToCels(far);
            let kmh = mphToKmh(mph);
            let wcll = Math.round(windChill(far, mph), -1);
            console.log(wcll)

            temp.textContent = cel;
            wSpeed.textContent = kmh;
            wChill.textContent = wcll;
        }
    }
}

export default weather;