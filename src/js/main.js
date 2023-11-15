// Get a reference to the splash dialog
// var hero = document.querySelector('.hero');
var navbar = document.querySelector('header')

// When the window is loaded....
// window.addEventListener('load', function() {
  
    
//     // .5 seconds later, hide the splash
//     setTimeout(function(){
//       hero.classList.toggle('overlap');
      
//     }, 15000);

//     setTimeout(function(){
//       hero.classList.toggle('overlap');
      
//     }, 30000);

// });

// scroll event to change desktop on scroll
// document.addEventListener("DOMContentLoaded", function(){


//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 120) {
//         navbar.classList.add('is-scrolled');
//         // add padding top to show content behind navbar
    
//       } else {
//         navbar.classList.remove('is-scrolled');
//       } 
//   });
// }); 

const footer = document.querySelector('footer');
const options = {
  rootMargin: '0px',
  threshold: 0.2
};

const nav = document.querySelector('nav')

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.add('hide-nav');
    } else {
      nav.classList.remove('hide-nav');
    }
  });
}

const observer = new IntersectionObserver(callback, options);

if (window.innerWidth <= 840) {
  observer.observe(footer);
} 
