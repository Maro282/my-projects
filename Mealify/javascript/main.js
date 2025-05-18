var icon = document.getElementById("icon");

function applySavedTheme() {
  if (localStorage.getItem("dark-mood") === "enabled") {
    document.body.classList.add("dark-mood");
  }
}

icon.onclick = function () {
  document.getElementById("body").classList.toggle("dark-mood");
  if (document.getElementById("body").classList.contains("dark-mood")) {
    localStorage.setItem("dark-mood", "enabled");
    icon.className = "fa-solid fa-sun";
  } else {
    localStorage.setItem("dark-mood", "disabled");
    icon.className = "fa-solid fa-moon";
  }
};

applySavedTheme();

var toggleMenu = document.getElementById("toggle-menu");
toggleMenu.onclick = function () {
  var generalMenu = document.getElementById("general-menu");
  generalMenu.style.display = "flex";
};

var close = document.getElementById("close");
close.onclick = function () {
  var generalMenu = document.getElementById("general-menu");
  generalMenu.style.display = "none";
};
