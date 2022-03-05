const dom = document.querySelector('.business-cards')

const myDirectory = {
    
    convertJson: (file) => file.json(),
    
    test: (data) => console.table(data),

    displayInfoList: (data) => {
       let row =  document.createElement('ul');

       row.innerHTML = `<li>${data.name}</li>
                        <li>${data.address}</li>
                        <li>${data.phone}</li>
                        <li>${data.url}</li>                  
       `

       dom.appendChild(row);
    }

}

export default myDirectory