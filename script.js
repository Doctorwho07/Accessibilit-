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
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".short-url");
  links.forEach((link) => {
    const url = link.href;
    if (url.length > 25) {
      link.textContent = url.slice(0, 25) + "...";
    }
  });
});
