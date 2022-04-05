import Base from "../../js/base.js";
import Form from "../js/dom.js";

const url = "https://jaredlarios.github.io/wdd230/tis/temples/data/temples.json"

fetch(url)
    .then((response) => response.json())
    .then(
        (jsObject) => {
            const jsonData = jsObject.temples
            jsonData.forEach(element => console.log(element.name) )
            console.log(jsObject.temples)

            Form.templesOpt(jsObject)
            Base.menu()
            Base.scroll()
            Base.footer()
        }
    )