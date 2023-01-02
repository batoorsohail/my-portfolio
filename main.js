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

// work info data
const workInfo = [
  {
    Id: '1',
    name: 'Tonic',
    img: 'snapshoot-portfolio.png',
    descriptions: 'hfjfjhfconsectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },
  {
    Id: '2',
    name: 'Multi-Post Stories',
    img: 'Snapshoot Portfolio.png',
    descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },
  {
    Id: '3',
    name: 'Tonic',
    img: 'Snapshoot Portfolio-1.png',
    descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },
  {
    Id: '4',
    name: 'Multi-Post Stories',
    img: 'Snapshoot Portfolio-2.png',
    descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },

];

// pop up tamplate
const popupSection = document.getElementById('my-pop-up');

function createPopup(project) {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div class= "popup">
      <div>
        <i class="fa-solid fa-xmark" onclick="closePopup(); toggle()"></i>
        <h3>${project.name}</h3>
        <ul class="proj">
          <li><a href="#">CANOPY</a></li>
          <li><div class="dot"></div></li>
          <li>Back End Dev</li>
          <li><div class="dot"></div></li>
          <li>2015</li>
        </ul>
        </div>
        <img src="./images/${project.img}" alt="Work-sample" />
        <div class="two-part">
          <div class="left-popup">
            <p class="pro">
              ${project.descriptions}
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
                ${project.liveServer} <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
  `;
  popupSection.appendChild(modal);
}



// work sample tamplate
const workSample = document.querySelector('#portfolio');

workInfo.forEach((project) => {
  const reverse = document.createElement('div');
  reverse.innerHTML = `
   <div class= "works">
      <img src="./images/${project.img}" alt="Work-sample" class="img-transition"/>
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
          ${project.descriptions}
        </p>
        <ul class="language">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <button class="button button-mg" onclick="openPopup()" toggle()">See Project</button>
      </div>
    </div>
  `;
  workSample.append(reverse);
});

// open and close pop up
function openPopup() {
  popupSection.classList.add('popup-open');
}

function closePopup() {
  popupSection.classList.remove('popup-open');
}

const popup = document.getElementById('popup');

function toggle() {
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
  const popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

popup.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
popup.addEventListener('click', toggle);

// formvalidation
const email = document.querySelector('#email').value;
const form = document.querySelector('#contact');
form.addEventListener('submit', (event) => {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.getElementById('validationMsg').innerHTML = 'Please use all small letters in Email';
  }
});