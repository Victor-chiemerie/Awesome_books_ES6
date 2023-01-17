export default function showAddNew() {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add_new');
  const contact = document.querySelector('.contact');
  const listBtn = document.querySelector('.listBtn');
  const addNewBtn = document.querySelector('.add_newBtn');
  const contactBtn = document.querySelector('.contactBtn');

  addNewBtn.addEventListener('click', () => {
    list.classList.add('hidden');
    addNew.classList.remove('hidden');
    contact.classList.add('hidden');
    listBtn.style.color = 'black';
    addNewBtn.style.color = 'rgb(55, 135, 172)';
    contactBtn.style.color = 'black';
  });
}