const menu = document.getElementById('menu');

function openmenu() {
  menu.style.display = 'block';
}

function closemenu() {
  menu.style.display = 'none';
}

//binding the event to HTML
menu.addEventListener('click', openmenu);
menu.addEventListener('click', closemenu);
