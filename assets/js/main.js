// main.js

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const mobileToggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector("nav ul");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
