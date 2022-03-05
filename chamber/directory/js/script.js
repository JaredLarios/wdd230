import myDirectory from "./dom.js";

/*--- Json file from github ---*/
const url = "https://jaredlarios.github.io/wdd230/chamber/directory/data/directory.json"

/* -- fetch the url and run the myDirectory functions -- */

fetch(url)
.then(myDirectory.convertJson)
.then(
    (file) =>{
        myDirectory.test
        const business = file['directory']
        business.forEach(e => myDirectory.displayInfoList(e))
    } 
)