// menubar open and close
const menu = document.getElementById('menu');

function openmenu() {
  menu.style.display = 'block';
}

function closemenu() {
  menu.style.display = 'none';
}

menu.addEventListener('click', openmenu);
menu.addEventListener('click', closemenu);

// -----------------------popup and work data--------------------

const modalContainer = document.querySelector('#popupModal');

const projects = [
  {
    id: 'first_project',
    name: 'Tonic',
    image: 'book-store.JPG',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    liveLink: 'https://book-store-microverse.netlify.app/',
    sourceLink: 'https://github.com/batoorsohail/book-store',
  },
  {
    id: 'second_project',
    name: 'Multi-Post Stories',
    image: 'crypto-world.JPG',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveLink: 'https://crypto-world-microverse.netlify.app/',
    sourceLink: 'https://github.com/batoorsohail/crypto-world',
  },
  {
    id: 'third_project',
    name: 'Space Travlers Hub',
    image: 'space-travlers.JPG',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveLink: 'https://batoorsohail.github.io/to-do-list/dist/',
    sourceLink: 'https://github.com/batoorsohail/to-do-list',
  },
  {
    id: 'fourth_project',
    name: 'Math Magicians',
    image: 'math-magicians.JPG',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveLink: 'https://batoorsohail.github.io/to-do-list/dist/',
    sourceLink: 'https://github.com/batoorsohail/to-do-list',
  },
];

// ------------popup modal------------------

function popUpModal(project) {
  const modalContent = `
  <div class= "popup-container">
    <div class= "popup">
      <div>
        <i class="fa-solid fa-xmark" id="popupClose"></i>
        <h3>${project.name}</h3>
        <ul class="proj">
          <li><a href="#">CANOPY</a></li>
          <li><div class="dot"></div></li>
          <li>Back End Dev</li>
          <li><div class="dot"></div></li>
          <li>2015</li>
        </ul>
      </div>
      <img src="./images/${project.image}" alt="Work-sample" class="popupImage"/>
      <div class="two-part">
        <div class="left-popup">
          <p class="pro mobile-popup-info">
            ${project.description}
          </p>
          <p class="pro desktop-popup-info">
            ${project.descriptionExtra}
          </p>
        </div>
        <div class="right-popup">
          <ul class="language">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul class="language lagu-desktop">
            <li>Github</li>
            <li>Ruby</li>
            <li>BootStrap</li>
          </ul>
          <div class="thin-line"></div>
            <button class="button popup-buttons">
              <div>
                <a href="${project.liveLink}" class="popupLink">Live Link</a> <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </button>
            <button class="button popup-buttons">
              <div>
                <a href="${project.sourceLink}" class="popupLink">Source Link</a> <i class="fa-brands fa-square-github"></i></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return modalContent;
}

// ----------------------work samples--------------------

function loadProjectCards(projects = []) {
  let projectContents = '';

  projects.forEach((project) => {
    projectContents += `
    <div class= "works" id= "portfolio">
    <img src="./images/${project.image}" alt="Work-sample" class="img-transition"/>
    <div class="card-work work">
      <h3>${project.name}</h3>
      <ul class="proj">
        <li><a href="#">CANOPY</a></li>
        <li><div class="dot"></div></li>
        <li>Back End Dev</li>
        <li><div class="dot"></div></li>
        <li>2015</li>
      </ul>
      <p class="pro">
        ${project.workInfo}
      </p>
      <ul class="language">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <button class="button button-mg" project-id="${project.id}" id="see-project-button">See Project</button>
    </div>
  </div>
    `;
  });

  return projectContents;
}

// -----------------------open and close popup-----------------------

function closePopUp() {
  modalContainer.style.display = 'none';
}

function openPopUp(project) {
  const modalTemplate = popUpModal(project);
  modalContainer.innerHTML = modalTemplate;
  modalContainer.style.display = 'block';

  const popUpCloseButton = document.querySelector('#popupClose');

  popUpCloseButton.addEventListener('click', closePopUp);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#work');
  modalContainer.style.display = 'none';

  portfolioSection.innerHTML = loadProjectCards(projects);

  const proButtons = document.querySelectorAll('#see-project-button');

  Array.from(proButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('project-id');
      const projectObj = projects.find((project) => project.id === projectID);

      openPopUp(projectObj);
    });
  });
});

// ---------------------form validation-------------------------

const email = document.getElementById('email');
const error = document.getElementById('error');
const form = document.getElementById('form');
const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
form.addEventListener('submit', (event) => {
  error.innerHTML = '';
  if (emailValidation(email.value)) {
    error.innerHTML = '';
  } else {
    event.preventDefault();
    error.innerHTML = 'Please add Email in lowercase!';
  }
});

// ------------------------local storage---------------

const localData = document.querySelectorAll('.form-input');
const localStoreData = {
  name: '',
  email: '',
  message: '',
};
localData.forEach((input) => {
  input.addEventListener('input', () => {
    localStoreData[input.name] = input.value;
    localStoreData[input.email] = input.value;
    localStoreData[input.message] = input.value;
    localStorage.setItem('information', JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  localData.forEach((element) => {
    element.value = informationStored[element.name];
  });
}
