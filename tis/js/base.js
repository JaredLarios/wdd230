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
    },
    favoriteTemples: (element) => {
        const imgHtml = document.querySelector(".temples img")
        
        imgHtml.setAttribute("data-src", element)
        imgHtml.setAttribute("data-srcset", element)
    },
    favTemnpleCard: (templeName, templeImg) => {
        const templeCard = document.querySelector(".fav-temple")
        const h3 = document.createElement("h3")
        const h3Info = document.createElement("h3")
        const btn = document.createElement("button")
        const section = document.createElement("section")
        const section2 = document.createElement("section")
        const img = document.createElement("img")

        h3.textContent = templeName
        h3Info.textContent = "Reserve now!"
        btn.textContent = "Reserve"
        img.src = templeImg
        img.alt = templeName

        section.appendChild(img)
        section.appendChild(h3)
        section2.appendChild(h3Info)
        section2.appendChild(btn)

        if ((templeName != null && templeImg != null) && (templeName != "" && templeImg != "") ) {
            templeCard.appendChild(section)
            templeCard.appendChild(section2)
        }
        else {
            templeCard.setAttribute("class","hidden")
        }

        btn.addEventListener("click", () => location.href = "https://jaredlarios.github.io/wdd230/tis/reservations/reserve.html")
    },
    footer: () => {
        const foot = document.querySelector("footer")

        let time = new Date
        let update = document.lastModified;

        foot.innerHTML = `
        <div class="footer-content">
            <img src="https://jaredlarios.github.io/wdd230/tis/images/logo.png">
            <div class="info">
                <h2>Temple Inn & Suites</h2>
                <p>Email: info@tis.org</p>
                <p>Phone: 424535789</p>
                <p><a href="https://jaredlarios.github.io/wdd230/tis/index.html#location">4800 Montgomery Ln #300, <br> Bethesda, MD 20814</a></p>
            </div>
            <ul>
            <li><a href="temples/locations.html">Temples</a></li>
            <li><a href="reservations/reserve.html">Reservations</a></li>
            <li><a href="services/serveices.html">Services</a></li>
            </ul>
        </div>

        <p class="credits">
            <span>&copy ${time.getFullYear()} | E. Jared Larios | BYU-Idaho | WDD230 | Updated: ${update}</span>
        </p>

        `
    }
}
export default Base