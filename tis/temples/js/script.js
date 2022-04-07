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
            let temple = []
            let imageTemple = []
            let favTemple = []
            let storage = []

            if (localStorage.getItem("favoriteTemples") != null) {
                storage = localStorage.getItem("favoriteTemples").split(",")
            }

            templesList.forEach((element) => {

                let card = document.createElement("div")
                let h2 = document.createElement("h2")
                let p1 = document.createElement("p")
                let p2 = document.createElement("p")
                let section = document.createElement("section")
                let img = document.createElement("img")
                let sectionBtn = document.createElement("section")
                let btn = document.createElement("button")


                
                card.setAttribute("class", `card`)
                h2.textContent = element.name
                p1.textContent = element.dedicated
                p2.textContent = element.location

                img.src = element.image
                img.alt = element.name
                //img.setAttribute("width","350px")

                sectionBtn.setAttribute("class", "btn")
                btn.textContent = "Like"

                sectionBtn.appendChild(btn)

                section.appendChild(img)
                section.appendChild(sectionBtn)

                card.appendChild(h2)
                card.appendChild(p1)
                card.appendChild(p2)
                card.appendChild(section)

                tempSection.appendChild(card)

                /*
                tempSection.innerHTML += `
                            <div class="card">
                                <h2>${element.name}</h2>
                                <p>${element.dedicated}</p>
                                <p>${element.location}</p>
                                <section>
                                    <img src="${element.image}" alt="${element.name}" width="350px">
                                    <section class="btn">
                                    </section>
                                </section>
                            </div>
                            `*/

                if ( storage != null) {
                    storage.forEach(templeF => {favTemple.push(templeF)})
                    favTemple.forEach(f => { if(element.name == f) {
                            card.classList.add("like");
                            btn.textContent = "Unlike";
                        }
                    })
                }
                /*if (favTemple.length > 1){
                })
                }
                else {
                    if (favTemple == element.name) {
                        card.classList.add("like");
                        btn.textContent = "Unlike";
                    }
                }*/
                btn.addEventListener("click", () => {

                    if (btn.textContent == "Unlike") {
                        btn.textContent = "Like";
                        /*temple.pop()*/

                        for (let i = 0; i < temple.length; i++) {
                            if (temple[i] === element.name) {
                                temple.pop(i);
                                favTemple.pop(i);
                            }
                        }

                        for (let i = 0; i < imageTemple.length; i++) {
                            if (imageTemple[i] === element.image) {
                                imageTemple.pop(i);
                                favTemple.pop(i);

                            }
                        }
                        console.table(favTemple)
                        localStorage.setItem('favoriteTemples', temple);
                        localStorage.setItem('favTempleImg', imageTemple);
                    } else if (btn.textContent == "Like") {
                        btn.textContent = "Unlike";
                        temple.push(element.name)
                        imageTemple.push(element.image)
                        localStorage.setItem('favoriteTemples', temple);
                        localStorage.setItem('favTempleImg', imageTemple);
                    }
                    
                    console.table(temple)
                    card.classList.toggle("like");
                })
            });
        }
    )