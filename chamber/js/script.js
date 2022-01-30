const menuBars = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const row = document.querySelector(".fa-bars")
const foot = document.querySelector("footer")


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

const lastMod = (year, updateDate) => `&copy ${year} | GT Chamber | E. Jared Larios | WDD 230 Project | Last Modification: ${updateDate}`;
foot.innerText = lastMod(new Date().getFullYear(), document.lastModified);