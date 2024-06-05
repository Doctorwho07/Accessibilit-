window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY === 0) {
    header.classList.remove("header-shadow");
  } else {
    header.classList.add("header-shadow");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
