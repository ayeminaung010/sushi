import './style.scss'
import './node_modules/bootstrap/dist/js/bootstrap.bundle'
import './node_modules/scrollreveal/dist/scrollreveal'
import './node_modules/waypoints/lib/noframework.waypoints'

let toRight = {
    distance: '100px',
    origin: 'left',
    opacity: true,
    duration: 2000,
    interval:100,
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '100px',
    origin: 'right',
    opacity: true,
    duration: 2000,
    interval:100,
};

ScrollReveal().reveal('.to-left', toLeft);

let toDown = {
    distance: '100px',
    origin: 'bottom',
    opacity: true,
    duration: 2000,
    interval:100,
};

ScrollReveal().reveal('.to-down', toDown);


new Waypoint({
    element: document.querySelector('#about'),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      if(oldlink != null){
        oldlink.classList.remove('active');
      }
      let currentLink = document.querySelector('[href="#about"]');
      currentLink.classList.add('active');
    },
  })

  new Waypoint({
    element: document.querySelector('#popular'),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      if(oldlink != null){
        oldlink.classList.remove('active');
      }
      let currentLink = document.querySelector('[href="#popular"]');
      currentLink.classList.add('active');
    },
  })

  new Waypoint({
    element: document.querySelector('#recently'),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      if(oldlink != null){
        oldlink.classList.remove('active');
      }
      let currentLink = document.querySelector('[href="#recently"]');
      currentLink.classList.add('active');
    },
  })
  new Waypoint({
    element: document.querySelector('#home'),
    handler: function(direction) {
      let oldlink = document.querySelector('.nav-link.active');
      if(oldlink != null){
        oldlink.classList.remove('active');
      }
      let currentLink = document.querySelector('[href="#home"]');
      currentLink.classList.add('active');
    },
  })

  