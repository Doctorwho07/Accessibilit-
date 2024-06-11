window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY === 0) {
    header.classList.remove("header-shadow");
  } else {
    header.classList.add("header-shadow");
  }
});
