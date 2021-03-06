
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
    if (window.innerWidth > 700) {
        menu.classList.remove('responsive');
        row.classList.remove('fa-chevron-up');
    };
};

// Chamber's info footer
const info = {
    myName: 'GT Chamber',
    myAdd: '14 st 19-35, Guatemala City',
    myEmail: 'info@gtchamber.org',
    myPhone: '(+502)43435151',
    logo: '<img class="logo" src="https://jaredlarios.github.io/wdd230/chamber/images/logo.jpg" alt="logo">'
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

datefield.innerHTML = `<em>${fulldate}</em>`


// ------------------------------------------------------------------------------------
// Pop Up Banner ---> join us for the chamber meet and greet Wednesday at 7:00 p.m


console.log(now.getDay())

if (now.getDay() === 1 || now.getDay() == 2) {
    datefield.innerHTML +=
        `<p><a href='#'>
    ???????? Come join us for the chamber meet and greet Wednesday at 7:00 p.m
    </a></p>`;
    menu.classList.toggle('responsive-2');
    document.querySelector('.pop').classList.toggle('space')
}

// ----------------------------------------------------------------------------------------------
