const dom = document.querySelector('.business-cards')

const myDirectory = {
    
    convertJson: (file) => file.json(),
    
    test: (data) => console.table(data),
    
    clear: ()=> dom.innerHTML='<table class="list"></table>',

    displayInfoList: (data) => {
        const domList = document.querySelector('.list')

        /*make conditionals the some open and close td for the screen size*/

       domList.innerHTML += `
                    <tr class='row'>
                        <td><h2>${data.name}<h2></td>
                        <td>${data.address}</td>
                        <td>${data.phone}</td>
                        <td><a href='${data.url}'>${data.url.slice(8)}<a></td>        
                    </tr>          
       `
    },

    displayInfoGallery: (data) => {
        let card =  document.createElement('div');
 
        dom.innerHTML += `
                    <div class='card'>
                         <img src='${data.photo}' alt='${data.name}'><br>
                         <span>${data.address}</span><br>
                         <span>${data.phone}</span><br>
                         <span><a href='${data.url}'>${data.url.slice(8)}</span><br> 
                    </div>                 
        `
     }
}

export default myDirectory