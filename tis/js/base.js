/* Page functionality */
const menuBar = document.querySelector("header")
const menu = document.querySelector(".menu")

const Base = {
    scroll: () => {
        window.addEventListener("scroll" , () => {
            menuBar.classList.toggle("show-color", window.scrollY > 200) 
        })
    }, 
    menu: () => {
        const menuBars = document.querySelector(".menu-bars")

        menuBars.addEventListener("click", () => {
            if (window.scrollY < 200) {
                menuBar.classList.toggle("show-color")
            }
            menu.classList.toggle("show-menu")
        })
    }
}
export default Base