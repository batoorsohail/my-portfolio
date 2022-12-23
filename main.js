const menu = document.getElementById('menu');

function openmenu() {
  menu.style.display = 'block';
}

function closemenu() {
  menu.style.display = 'none';
}

//  binding the event to HTML
menu.addEventListener('click', openmenu);
menu.addEventListener('click', closemenu);

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
    img: 'Snapshoot Portfolio-2.png',
    descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },
  {
    Id: '4',
    name: 'Multi-Post Stories',
    img: 'Snapshoot Portfolio-1.png',
    descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae quos dolor numquam, quibusdam tempora illum nulla facere sunt deleniti?',
    technologies: ['HTMl', 'CSS', 'JavaScript'],
    liveServer: 'See Live',
    sourceLink: 'See Source',
  },

];

const workSample = document.querySelector('#portfolio');
workInfo.forEach((project) => {
  const reverse = document.createElement('div');
  reverse.innerHTML = `
   <div class = "works">
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
        <button class="button button-mg" onclick="openPopup(); toggle()">See Project</button>
      </div>
    </div>
    <section class="popup-bg">
      <div class="popup" id="popup">
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
    </section>
  `;
  workSample.appendChild(reverse);
});

const popup = document.getElementById('popup');

function openPopup() {
  popup.classList.add('popup-open');
}

function closePopup() {
  popup.classList.remove('popup-open');
}

function toggle() {
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
  const popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

popup.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
popup.addEventListener('click', toggle);