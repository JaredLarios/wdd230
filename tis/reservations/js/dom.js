const Form = {
    templesOpt: (e) => {
        const jsonElements = e.temples;
        const selectLocation = document.querySelector("#locations");

        jsonElements.forEach(element => {
            let templeName = element.name;
            selectLocation.innerHTML += `<option value="${templeName}">${templeName}</option>`;
        });
    }
}

export default Form