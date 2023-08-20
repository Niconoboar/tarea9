
//segundo
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList').getElementsByTagName('li');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  for (const item of itemList) {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});

//tercero
const dynamicForm = document.getElementById('dynamicForm');
const textInput = document.getElementById('textInput');
const cardContainer = document.getElementById('cardContainer');

dynamicForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = textInput.value.trim();
  if (text !== '') {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = text;
    cardContainer.appendChild(card);
    textInput.value = '';
  }
});

// cuarto
const validationForm = document.getElementById('validationForm');

validationForm.addEventListener('submit', (e) => {
  let isValid = true;

  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  // Agrega más campos según necesites

  if (nameInput.value.trim() === '') {
    isValid = false;
    alert('Por favor, ingrese su nombre.');
  }

  if (!isValidEmail(emailInput.value)) {
    isValid = false;
    alert('Por favor, ingrese un correo electrónico válido.');
  }

  // Agrega más validaciones según necesites

  if (!isValid) {
    e.preventDefault();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
