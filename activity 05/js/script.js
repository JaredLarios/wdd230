// Book of Mormon - Top 25

const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('button');

function addBook() {
    let book = input.value;
    input.value = '';

    const liBook = document.createElement('li');
    const liText = document.createElement('span');
    const liBtn = document.createElement('button');

    liBook.appendChild(liText);
    liText.textContent = book;
    liBook.appendChild(liBtn);
    liBtn.textContent = '❌';
    list.appendChild(liBook);

    liBtn.onclick = function (element) {
        list.removeChild(liBook)
    }

    input.focus();
}
button.addEventListener('click',addBook)