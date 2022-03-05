const dom = document.querySelector('.business-cards')

const myDirectory = {
    
    convertJson: (file) => file.json(),
    
    test: (data) => console.table(data),
    
    clear: ()=> dom.innerHTML='',

    displayInfoList: (data) => {

       dom.innerHTML += `
                    <ul class='row'>
                        <li><h2>${data.name}<h2></li>
                        <li>${data.address}</li>
                        <li>${data.phone}</li>
                        <li><a href='${data.url}'>${data.url.slice(8)}<a></li>        
                    </ul>          
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