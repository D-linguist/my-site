function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
  var style1 = document.getElementById("stylesheet1");
  var style2 = document.getElementById("stylesheet2");

  style1.onclick = function () {
    swapStyleSheet("style.css");
  };
  style2.onclick = function () {
    swapStyleSheet("style-dark.css");
  };
}

window.onload = initate;

let toTopButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

let topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $(".navbar-collapse").collapse("hide");
  // document.getElementByClassName(".navbar-collapse").collapse("hide");
  // document.getElementById("collapsibleNavbar");
  // const menuToggle = document.getElementById("navbarSupportedContent");
  // new bootstrap.Collapse(menuToggle).toggle();
};

// const bsCollapse = new bootstrap.Collapse(menuToggle);

// toTopButton.addEventListener("click", () => {
//   bsCollapse.toggle();
// });
