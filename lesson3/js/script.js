
const lastUpdate = (year, updateDate) => `&copy ${year} .:|:. E. Jared Larios .:|:. Last Updated: ${updateDate}`;

document.getElementById("last-update").innerHTML = lastUpdate(new Date().getFullYear(), document.lastModified);