const menuBars = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const row = document.querySelector(".fa-bars")


menuBars.addEventListener('click', () => {
    menu.classList.toggle('responsive');
    row.classList.toggle('fa-chevron-up');
}, false);

window.onresize = () => {
    if (window.innerWidth > 760){
        menu.classList.remove('responsive');
        row.classList.remove('fa-chevron-up');
    };
};