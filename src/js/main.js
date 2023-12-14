// Get a reference to the splash dialog
// var hero = document.querySelector('.hero');
// var navbar = document.querySelector('header')


// Get modal element
const modal = document.getElementById('video-modal'); 

// Get open button
const openBtn = document.getElementById('open-btn');

// Get video triggers
const videoTriggers = document.querySelectorAll('.video-trigger');

// Get close button 
const closeBtn = document.getElementById('close-modal');

// Listen for open click
// openBtn.addEventListener('click', () => {
//   modal.showModal();
// });

videoTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    const videoId = event.target.tagName == 'IMG' ? event.target.parentElement.dataset.video : event.target.dataset.video
    // console.log(event.target);
    // console.log(videoId);
    // setIframeSource(event.target.dataset.video);
    setIframeSource(videoId);
    modal.showModal();
  }); 

  
});

// Build the iframe source based on data input
function setIframeSource(videoId) {
  const iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/"+videoId; 
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"; 
  iframe.allowFullscreen = true;
  // const childDiv = modal.firstElementChild
  // console.log(childDiv)
  modal.firstElementChild.appendChild(iframe);

}

// Usage
// const videoUrl = 'https://www.youtube.com/embed/123';
// setIframeSource(videoUrl);


// Listen for close click  
closeBtn.addEventListener('click', () => {
  modal.close();
  modal.querySelector('iframe').remove()
});

modal.addEventListener('click', (event) => {
  if ( event.target == modal ) {
    modal.close();
    modal.querySelector('iframe').remove()
    // modal.nextElementSibling.remove
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