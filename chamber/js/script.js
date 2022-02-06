///  modelus 

/// footer
const menuBars = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const row = document.querySelector(".fa-bars")
const foot = document.getElementById("mod")
const infoFoot = document.getElementById("info")


menuBars.addEventListener('click', () => {
    menu.classList.toggle('responsive');
    row.classList.toggle('fa-chevron-up');
}, false);

window.onresize = () => {
    if (window.innerWidth > 700){
        menu.classList.remove('responsive');
        row.classList.remove('fa-chevron-up');
    };
};

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

// date 
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new 

Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

window.addEventListener('load', () => {
    console.log('loaded items');
    const images = ['images/chamber.jpg','images/chamber-2.jpg','images/chamber-3.jpg'];
    let indexImage = 0;

    const slideShow = () => { 

        document.querySelector('#slide').setAttribute('src',images[indexImage])

        if (indexImage < 2) {
            indexImage++;
        } else {
            indexImage = 0; 
        }
    }
    setInterval(slideShow, 2 * 3600);
});

// Pop Up


console.log(now.getDay())

if (now.getDay() === 2 || now.getDay() == 3 ) {
    datefield.innerHTML += 
    `<p><a href='#'>
    🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m
    </a></p>`;
    menu.classList.toggle('responsive-2');
    document.querySelector('.pop').classList.toggle('space')
}
