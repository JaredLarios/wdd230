const copyRight = document.querySelector("p.copy-right");
const updates = document.getElementById("update")
copyRight.innerHTML = "&copy 2022 .:|:. E. Jared Larios.:|:.";

let updateDate = document.lastModified;
updates.innerHTML = `Last Updated: ${updateDate}`;

console.log(copyRight);