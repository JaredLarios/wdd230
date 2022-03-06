const dom = document.querySelector('.buss-cards')
const small = window.matchMedia("(max-width: 34.5em)")
const medium = window.matchMedia("(min-width: 34.5em) and (max-width: 47.7em)")
const large = window.matchMedia("(min-width: 47.8em)")

const myDirectory = {
    
    convertJson: (file) => file.json(),
    
    test: (data) => console.table(data),
    
    clear: ()=> dom.innerHTML= '',

    displayInfoList: (data) => {
        const domList = document.querySelector('.tab')
        const table = document.querySelector('table')

        /*make conditionals the some open and close td for the screen size*/

        let column = ''
        let column2 = ''

        if (large.matches){column = '</td><td>'; column2 = '</td><td>'; table.classList.add('.tab-large')}
        else {column='<br>'; table.classList.remove('.tab-large')}


       domList.innerHTML += `
                    <tr class='row'>
                        <td><h2>${data.name}</h2>
                        ${column2}${data.address}
                        ${column}${data.phone}
                        ${column}<a href='${data.url}'>${data.url.slice(8)}<a></td>        
                    </tr>          
       `
    },

    displayInfoGallery: (data) => {
        let card =  document.createElement('div');
 
        dom.innerHTML += `
                    <div class='buss-card'>
                         <img src='${data.photo}' alt='${data.name}'><br>
                         <span>${data.address}</span><br>
                         <span>${data.phone}</span><br>
                         <span><a href='${data.url}'>${data.url.slice(8)}</a></span><br> 
                    </div>                 
        `
     }
}

export default myDirectory