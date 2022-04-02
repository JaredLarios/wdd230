const url = "https://jaredlarios.github.io/wdd230/tis/temples/data/temples.json"
import Base from "../../js/base.js"

fetch(url)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            Base.scroll()
            Base.menu()
            Base.footer()
            console.log(jsObject.temples)
            const templesList = jsObject.temples
            const tempSection = document.querySelector(".temples")

            templesList.forEach( (element) => {

                tempSection.innerHTML += `
                            <div class="card">
                                <h2>${element.name}</h2>
                                <p>${element.dedicated}</p>
                                <p>${element.location}</p>
                                <section>
                                    <img src="${element.image}" alt="${element.name}" width="350px">
                                    <section class="btn">
                                        <button>More info</button>
                                    </section>
                                </section>
                            </div>
                            ` 
            });
        }
    )