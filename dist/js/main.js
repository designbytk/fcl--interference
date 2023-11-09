var navbar = document.querySelector("header");
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 120) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  });
});
const footer = document.querySelector("footer");
const options = {
  rootMargin: "0px",
  threshold: 0.2
};
const nav = document.querySelector("nav");
function callback(entries, observer2) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add("hide-nav");
    } else {
      nav.classList.remove("hide-nav");
    }
  });
}
const observer = new IntersectionObserver(callback, options);
if (window.innerWidth <= 840) {
  observer.observe(footer);
}
