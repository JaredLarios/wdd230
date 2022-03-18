import myDirectory from "./dom.js";

/*--- icons on the HTML ---*/
const list = document.querySelector('.fa-th-list')
const grid = document.querySelector('.fa-th')

/*--- Json file from github ---*/
const url = "https://jaredlarios.github.io/wdd230/chamber/directory/data/directory.json"
const dom = document.querySelector('.buss-cards')

/* -- fetch the url and run the myDirectory functions -- */

fetch(url)
    .then(myDirectory.convertJson)
    .then(
        (file) => {
            myDirectory.test
            const business = file['directory']
            
            
            if (window.innerWidth < 700 && window.innerWidth > 552) {
                myDirectory.clear();
                dom.innerHTML = '<table class="table"><tbody class="tab"></tbody></table>'
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
            
            

            list.addEventListener('click', () => {
                myDirectory.clear();
                dom.innerHTML = '<table class="table"><tbody class="tab"></tbody></table>'
                business.forEach(e => myDirectory.displayInfoList(e));
                list.classList.add('fa-clicked');
                grid.classList.remove('fa-clicked');
            })
            grid.addEventListener('click', () => {
                myDirectory.clear();
                business.forEach(e => myDirectory.displayInfoGallery(e));
                grid.classList.add('fa-clicked');
                list.classList.remove('fa-clicked');
            })
        }
    )