import Library from './modules/book.js';
import showList from './modules/showList.js';
import showAddNew from './modules/showAddNew.js';
import showContact from './modules/showContact.js';
import { DateTime } from './modules/luxon.js';

// The funtions below display the header
showList();
showAddNew();
showContact();

// Display the time
setInterval(() => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = currentDate;
}, 1000);

const booklist = document.querySelector('#booklist');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const buttonAdd = document.getElementById('add_button');

const obj = new Library();

printBooks = () => {
  const shelf = JSON.parse(localStorage.getItem('shelf')) || [];
  let innerhtml = '';

  shelf.forEach((book, index) => {
    innerhtml += `
    <div>
        <p>"${book.title}" by ${book.author} </p>
        <button id="remove-btn${index}">Remove</button>
            </div>
        `;
  });

  booklist.innerHTML = innerhtml;

  shelf.forEach((book, index) => {
    const removeBtn = document.getElementById(`remove-btn${index}`);
    removeBtn.addEventListener('click', () => {
      obj.removeBook(index);
      printBooks();
    });
  });
}

printBooks();

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  obj.addBook(inputTitle.value, inputAuthor.value);
  printBooks();

  inputTitle.value = '';
  inputAuthor.value = '';
});
