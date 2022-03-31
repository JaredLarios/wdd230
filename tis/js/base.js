/* Page functionality */
const menuBar = document.querySelector("header")
const menu = document.querySelector(".menu")

const Base = {
    scroll: () => {
        window.addEventListener("scroll", () => {
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
    },
    lazzy: () => {
        const images = document.querySelectorAll('[data-src]');

        function preloadImage(img) {
            const srcs = img.getAttribute("data-src");
            const srcsets = img.getAttribute("data-srcset");
            if (!srcs || !srcsets) {
                return;
            }

            img.src = srcs;
            img.srcset = srcsets;
            img.onload = () => { img.removeAttribute('data-src'); img.removeAttribute('data-srcset') };
        }

        const imgOptions = {
            threshold: 0,
            rootMargin: '0px 0px 400px 0px',
        };

        const imgObserver = new IntersectionObserver(
            (entries, imgObserver) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        preloadImage(entry.target);
                        imgObserver.unobserve(entry.target);
                    }
                })
            }, imgOptions);

            images.forEach(image => {
            imgObserver.observe(image);
        })
    }
}
export default Base