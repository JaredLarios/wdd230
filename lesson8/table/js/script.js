const compiled = document.querySelector("td.tab-foot");

let compileDate = new Date(document.lastModified);

compiled.innerHTML = `Compiled ${compileDate.getMonth()}.${compileDate.getDay()}.${compileDate.getFullYear()} by E. Jared Larios`;