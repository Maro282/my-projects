var type = new Typed(".auto-type", {
  strings: ["Developer", "Designer", "Freelancer", "Photographer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

//handling counter

// 1-works
var counter = 0;
var couterElement = document.getElementById("works");

const worksInterval = setInterval(() => {
  couterElement.textContent = counter;
  counter++;

  if (counter > 450) {
    clearInterval(worksInterval);
  }
}, 5);

//Handling sliding

function slider1() {
  var slid1 = document.getElementById("slid1");
  var slid2 = document.getElementById("slid2");
  slid1.style.transform = "translateX(0%)";
  slid2.style.transform = "translateX(108%)";
}

function slider2() {
  var slid1 = document.getElementById("slid1");
  var slid2 = document.getElementById("slid2");
  slid1.style.transform = "translateX(-108%)";
  slid2.style.transform = "translateX(0%)";
}
