///  modelus 
import weather from "./windchill.js"

/// selctors
const menuBars = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const row = document.querySelector(".fa-bars")
const foot = document.getElementById("mod")
const infoFoot = document.getElementById("info")

// -----------------------------------------------------------------------------------

/* menu responsive */
menuBars.addEventListener('click', () => {
    menu.classList.toggle('responsive');
    row.classList.toggle('fa-chevron-up');
}, false);

// ---------------------------------------------------------------------------

/* remove menu responsive*/
window.onresize = () => {
    if (window.innerWidth > 700){
        menu.classList.remove('responsive');
        row.classList.remove('fa-chevron-up');
    };
};

// Chamber's info footer
const info ={
    myName : 'GT Chamber',
    myAdd : '14 st 19-35, Guatemala City',
    myEmail : 'info@gtchamber.org',
    myPhone : '(+502)43435151',
    logo: '<img class="logo" src="images/logo.jpg" alt="logo">'
}

infoFoot.innerHTML = `${info.logo} <div><h2>${info.myName}</h2> <p>${info.myAdd}</p> </div> <div> <p>${info.myEmail}</p> <p>${info.myPhone}</p></div>`;

const lastMod = (year, updateDate) => `&copy ${year} | GT Chamber | E. Jared Larios | WDD 230 Project | Last Modification: ${updateDate}`;
foot.innerHTML = `<p>${lastMod(new Date().getFullYear(), document.lastModified)}</p>`;

// -------------------------------------------------------------------------------------------------------------
// date 
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new 

Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;
//-------------------------------------------------------------------------------------

/* Slide Show*/
/* Disabled for Week 7 review

window.addEventListener('load', () => {
    console.log('loaded items');
    const images = ['images/chamber.jpg','images/chamber-2.jpg','images/chamber-3.jpg', 'images/wdd230-org.jpg'];
    const responsive = [
        'images/chamber200.jpg 200vw, images/chamber500.jpg 500vw, images/chamber800.jpg 800vw',
        'images/chamber-2-200.jpg 200vw, images/chamber-2-500.jpg 500vw, images/chamber-2-800.jpg 800vw',
        'images/chamber-3-200.jpg 200vw, images/chamber-3-500.jpg 500vw, images/chamber-3-800.jpg 800vw',
        'images/wdd230-org200.jpg 200vw, images/wdd230-org500.jpg 500vw, images/wdd230-org800.jpg 800vw'
    ];
    let indexImage = 0;

    const slideShow = () => { 

        document.querySelector('#slide').setAttribute('src',images[indexImage])
        document.querySelector('#slide').setAttribute('srcset', responsive[indexImage])

        if (indexImage < 3) {
            indexImage++;
        } else {
            indexImage = 0; 
        }
    }
    setInterval(slideShow, 2 * 3600);
});
*/

// ------------------------------------------------------------------------------------
// Pop Up Banner 


console.log(now.getDay())

if (now.getDay() === 1 || now.getDay() == 2 ) {
    datefield.innerHTML += 
    `<p><a href='#'>
    🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m
    </a></p>`;
    menu.classList.toggle('responsive-2');
    document.querySelector('.pop').classList.toggle('space')
}

// ----------------------------------------------------------------------------------------------

/* Weather */

const init = weather.display()