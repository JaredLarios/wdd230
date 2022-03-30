const Base = {
    scroll: () => {
        window.addEventListener("scroll" , () => {
            const menuBar = document.querySelector("header")
            menuBar.classList.toggle("show-color", window.scrollY> 200) 
        })
    }, 
    menu: () => {
        const menuBars = document.querySelector(".menu-bars")

        menuBars.addEventListener("click", () => {
            const menu = document.querySelector("nav")

            menu.classList.toggle("show-menu")
        })
    }
}
export default Base