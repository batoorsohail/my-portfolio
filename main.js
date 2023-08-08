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
    name: 'RideEase',
    image: 'rideEase.JPG',
    kind: 'Front and Back End',
    year: 2023,
    description: 'RideEase is a car booking website that allows users to easily book a ride and travel to their desired destinations. Users can reserve a car from the available cars by providing the date and city. RideEase provides a seamless and reliable car booking experience.',
    descriptionExtra: 'RideEase is a car booking website that allows users to easily book a ride and travel to their desired destinations. Users can reserve a car from the available cars by providing the date and city. RideEase provides a seamless and reliable car booking experience.',
    workInfo: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    liveLink: 'https://book-store-microverse.netlify.app/',
    sourceLink: 'https://github.com/batoorsohail/book-store',
  },
  {
    id: 'second_project',
    name: 'Crypto World',
    image: 'crypto-world.JPG',
    kind: 'Front End',
    year: 2023,
    description: 'Crypto World is a website that uses an API to get the data and show the cryptocurrency. Users can search for a coin or go to the details page which displays more information about the currency.',
    descriptionExtra: 'Crypto World is a website that uses an API to get the data and show the cryptocurrency. Users can search for a coin or go to the details page which displays more information about the currency.',
    workInfo: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveLink: 'https://crypto-world-microverse.netlify.app/',
    sourceLink: 'https://github.com/batoorsohail/crypto-world',
  },
  {
    id: 'third_project',
    name: 'Space Travlers Hub',
    image: 'space-travlers.JPG',
    kind: 'Front End',
    year: 2023,
    description: "Space Travelers' Hub is a React project in which you can reserve rockets, missions, dragons and see the reserved items in your profile. Also, they can cancel their reservation. We used an API to display rockets in the page.",
    descriptionExtra: "Space Travelers' Hub is a React project in which you can reserve rockets, missions, dragons and see the reserved items in your profile. Also, they can cancel their reservation. We used an API to display rockets in the page.",
    workInfo: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveLink: 'https://batoorsohail.github.io/to-do-list/dist/',
    sourceLink: 'https://github.com/batoorsohail/to-do-list',
  },
  {
    id: 'fourth_project',
    name: 'Book Store',
    image: 'book-store.JPG',
    kind: 'Front End',
    year: 2023,
    description: "Book Store is a simple website where users can add a book with the author's name and category of the book. When a user adds a new book it will push the data inside an API and then it will load it for others as well.",
    descriptionExtra: "Book Store is a simple website where users can add a book with the author's name and category of the book. When a user adds a new book it will push the data inside an API and then it will load it for others as well.",
    workInfo: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    liveLink: 'https://book-store-microverse.netlify.app/',
    sourceLink: 'https://github.com/batoorsohail/book-store',
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
          <li>${project.kind}</li>
          <li><div class="dot"></div></li>
          <li>${project.year}</li>
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
        <li>${project.kind}</li>
        <li><div class="dot"></div></li>
        <li>${project.year}</li>
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
