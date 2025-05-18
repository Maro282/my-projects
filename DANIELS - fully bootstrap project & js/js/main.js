//Handling Spin

window.addEventListener("load", () => {
  const loader = document.querySelector(".load");
  loader.classList.add("no-load");
  loader.addEventListener("transitionend", () => {
    loader.classList.remove("load");
  });
});

//Handling Auto Typing

var type = new Typed(".auto-type", {
  strings: ["Developer", "Designer", "Freelancer"],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true,
});

//Handing portfolio filter
const buttons = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".portfolio-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active-filter");

    buttons.forEach((x) => {
      if (x != button) {
        x.classList.remove("active-filter");
      }
    });

    const filter = button.getAttribute("data-filter");
    items.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (category === filter || filter === "all") {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});

//Handling users counter
const counterE1 = document.querySelector(".users-counter");
let usersNumber = 0;

const updateUsers = setInterval(function () {
  usersNumber++;
  counterE1.textContent = usersNumber;

  if (usersNumber >= 850) {
    clearInterval(updateUsers);
    usersNumber = 0;
  }
});

//Handling Projects counter
const counterE2 = document.querySelector(".projects-counter");
let projectsNumber = 0;
const updateProjects = setInterval(function () {
  projectsNumber++;
  counterE2.textContent = projectsNumber;

  if (projectsNumber >= 230) {
    clearInterval(updateProjects);
    projectsNumber = 0;
  }
});

//Handling Projects counter
const counterE3 = document.querySelector(".code-counter");
let codeNumber = 0;
const updateCode = setInterval(function () {
  codeNumber++;
  counterE3.textContent = codeNumber;

  if (codeNumber >= 9450) {
    clearInterval(updateProjects);
    codeNumber = 0;
  }
});

//Handling Files counter
const counterE4 = document.querySelector(".files-counter");
let filesNumber = 0;
const updateFiles = setInterval(function () {
  filesNumber++;
  counterE4.textContent = filesNumber;

  if (filesNumber >= 780) {
    clearInterval(updateFiles);
    filesNumber = 0;
  }
});
