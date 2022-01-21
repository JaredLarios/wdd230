const copyRight = document.querySelector("p.copy-right");
const updates = document.getElementById("update");
let currentYear = new Date().getFullYear();
copyRight.innerHTML = `&copy ${currentYear} .:|:. E. Jared Larios .:|:. Guatemala City`;

let updateDate = document.lastModified;
updates.innerHTML = `Last Updated: ${updateDate}`;

console.log(copyRight);