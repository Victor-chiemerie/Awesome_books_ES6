export default showContact = () => {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add_new');
  const contact = document.querySelector('.contact');
  const listBtn = document.querySelector('.listBtn');
  const addNewBtn = document.querySelector('.add_newBtn');
  const contactBtn = document.querySelector('.contactBtn');

  contactBtn.addEventListener('click', () => {
    list.classList.add('hidden');
    addNew.classList.add('hidden');
    contact.classList.remove('hidden');
    listBtn.style.color = 'black';
    addNewBtn.style.color = 'black';
    contactBtn.style.color = 'rgb(55, 135, 172)';
  });
}