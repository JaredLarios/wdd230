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
    },

    displayInfoGallery: (data) => {
        let row =  document.createElement('div');
 
        row.innerHTML = `<img src='${data.photo}' alt='${data.name}'>
                         <span>${data.address}</span><br>
                         <span>${data.phone}</span><br>
                         <span>${data.url}</span><br>                  
        `
 
        dom.appendChild(row);
     }

}

export default myDirectory