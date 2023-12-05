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

// Get modal element
const modal = document.getElementById('video-modal'); 

// Get open button
const openBtn = document.getElementById('open-btn');

// Get close button 
const closeBtn = document.getElementById('close-modal');

// Listen for open click
openBtn.addEventListener('click', () => {
  modal.showModal();
});

// Listen for close click  
closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if ( event.target == modal ) {
    modal.close();
  }
})


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


// Mobile menu toggle state when menu item selected -- nav doesn't leave the page

// document.getElementById("myCheckbox").checked = true;
const navElements = document.querySelectorAll('nav li a');
navElements.forEach(navElement => {
  navElement.addEventListener('click', function(event) {
    document.getElementById("mobile-menu").checked = false;
  });
});