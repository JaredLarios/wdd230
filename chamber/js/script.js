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

infoFoot.innerHTML = `${info.logo} <p>${info.myName}</p> <p>${info.myAdd}</p> <p>${info.myEmail}</p> <p>${info.myPhone}</p>`;

const lastMod = (year, updateDate) => `&copy ${year} | GT Chamber | E. Jared Larios | WDD 230 Project | Last Modification: ${updateDate}`;
foot.innerHTML = `<p>${lastMod(new Date().getFullYear(), document.lastModified)}</p>`;