const showList = () => {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add_new');
  const contact = document.querySelector('.contact');
  const listBtn = document.querySelector('.listBtn');
  const addNewBtn = document.querySelector('.add_newBtn');
  const contactBtn = document.querySelector('.contactBtn');

  listBtn.addEventListener('click', () => {
    list.classList.remove('hidden');
    addNew.classList.add('hidden');
    contact.classList.add('hidden');
    listBtn.style.color = 'rgb(55, 135, 172)';
    addNewBtn.style.color = 'black';
    contactBtn.style.color = 'black';
  });
};

export default showList;