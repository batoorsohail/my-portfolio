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
    image: 'snapshoot-portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'second_project',
    name: 'Multi-Post Stories',
    image: 'Snapshoot Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'third_project',
    name: 'Tonic',
    image: 'Snapshoot Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
  },
  {
    id: 'fourth_project',
    name: 'Multi-Post Stories',
    image: 'Snapshoot Portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExtra: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workInfo: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    liveLink: 'Live Link',
    sourceLink: 'Source Link',
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
      <img src="./images/${project.image}" alt="Work-sample" />
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
                ${project.liveLink} <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </button>
            <button class="button popup-buttons">
              <div>
                ${project.sourceLink} <i class="fa-brands fa-square-github"></i></i>
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

const fields = document.querySelectorAll('.formData');
const localData = {
  fName: '',
  lName: '',
  email: '',
  msg: '',
};
fields.forEach((field) => {
  field.addEventListener('input', () => {
    localData[field.name] = field.value;
    localStorage.setItem('contactFormData', JSON.stringify(localData));
  });
});
window.addEventListener('load', () => {
  let retrievedData = {};
  if (localStorage.getItem('contactFormData')) {
    retrievedData = JSON.parse(localStorage.getItem('contactFormData'));
    document.getElementById('fName').value = retrievedData.fName;
    document.getElementById('lName').value = retrievedData.lName;
    document.getElementById('email').value = retrievedData.email;
    document.getElementById('msg').value = retrievedData.msg;
  }
});