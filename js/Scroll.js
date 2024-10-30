window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.remove("nabar-transparent");
    navbar.classList.add("navbar-white");
  } else {
    navbar.classList.remove("navbar-white");
    navbar.classList.add("navbar-transparent");
  }
});
