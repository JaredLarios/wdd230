const dom = document.querySelector('.business-cards')

const myDirectory = {
    
    convertJson: (file) => file.json(),
    
    test: (data) => console.table(data),
    
    clear: ()=> dom.innerHTML='',

    displayInfoList: (data) => {

       dom.innerHTML += `
                    <ul>
                        <li>${data.name}</li>
                        <li>${data.address}</li>
                        <li>${data.phone}</li>
                        <li>${data.url}</li>        
                    </ul>          
       `
    },

    displayInfoGallery: (data) => {
        let card =  document.createElement('div');
 
        dom.innerHTML += `
                    <div>
                         <img src='${data.photo}' alt='${data.name}'>
                         <span>${data.address}</span><br>
                         <span>${data.phone}</span><br>
                         <span>${data.url}</span><br> 
                    </div>                 
        `
     }

    /*defaultDisplay: (small, medium, large, business) =>{
        if (small == true || large == true) {
            myDirectory.clear();
            business.forEach(e => myDirectory.displayInfoGallery(e))
        }
        else if (medium == true) {
                myDirectory.clear();
                business.forEach(e => myDirectory.displayInfoList(e))
        }
    }*/
}

export default myDirectory