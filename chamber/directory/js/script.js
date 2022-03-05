import myDirectory from "./dom.js";

/*--- icons on the HTML ---*/
const list = document.querySelector('.fa-th-list')
const grid = document.querySelector('.fa-th')
const medium = window.matchMedia("(min-width: 34.5em) and (max-width: 47.7em)")

/*--- Json file from github ---*/
const url = "https://jaredlarios.github.io/wdd230/chamber/directory/data/directory.json"

/* -- fetch the url and run the myDirectory functions -- */

fetch(url)
.then(myDirectory.convertJson)
.then(
    (file) =>{
        myDirectory.test
        const business = file['directory']

        if (medium.matches) {
            myDirectory.clear();
            business.forEach(e => myDirectory.displayInfoList(e));
            list.classList.add('fa-clicked');
            grid.classList.remove('fa-clicked');

        }
        else {
            myDirectory.clear();
            business.forEach(e => myDirectory.displayInfoGallery(e));
            grid.classList.add('fa-clicked');
            list.classList.remove('fa-clicked');
        }

        list.addEventListener('click',() =>{
            myDirectory.clear();
            business.forEach(e => myDirectory.displayInfoList(e));
            list.classList.add('fa-clicked');
            grid.classList.remove('fa-clicked');
        })
        grid.addEventListener('click', ()=>{
            myDirectory.clear();
            business.forEach(e => myDirectory.displayInfoGallery(e));
            grid.classList.add('fa-clicked');
            list.classList.remove('fa-clicked');
        })
    } 
)