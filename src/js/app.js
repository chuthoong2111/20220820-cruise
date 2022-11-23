import "../scss/app.scss";
import "remixicon/fonts/remixicon.css";
// import { Fancybox } from "@fancyapps/ui";
import {
  Fancybox,
  Carousel
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import {
  Autoplay
} from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
Carousel.Plugins.Autoplay = Autoplay;
Fancybox.defaults.Hash = false;
import Masonry from "masonry-layout";
// bootstrap
// import { Popover } from "bootstrap";
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
// import "bootstrap/js/dist/popover";
// import 'bootstrap/js/dist/scrollspy';
import "bootstrap/js/dist/tab";
// import 'bootstrap/js/dist/toast';
// import "bootstrap/js/dist/tooltip";
/* Your JS Code goes here */
// tippyjs
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
import "tippy.js/themes/light.css";
//   b-lazy
// import LazyLoad from "vanilla-lazyload";
const logEvent = (eventName, element) => {
  console.log(
    Date.now(),
    eventName,
    element.getAttribute("data-src"),
    element.getAttribute("src")
  );
};

const lazyLoadOptions = {
  elements_selector: ".lazy",
  to_webp: true,

  callback_enter: (element) => {
    logEvent("ENTERED", element);
  },
  callback_load: (element) => {
    logEvent("LOADED", element);
  },
  callback_set: (element) => {
    logEvent("SET", element);
  },
  callback_error: (element) => {
    logEvent("ERROR", element);
    element.src = "https://placehold.it/220x280?text=Placeholder";
  },
};

const createLazyLoadInstance = () => {
  return new LazyLoad(lazyLoadOptions);
};

export default () => {
  document.addEventListener("DOMContentLoaded", createLazyLoadInstance);
};
/* Demo JS */
import "./home.js";
// Initialise Carousel

// Customize Fancybox
const hasClass = document.querySelectorAll('div[data-fancybox="gallery-boat"]');
if (hasClass.length > 0) {
  Fancybox.bind('[data-fancybox="gallery-boat"]', {
    Thumbs: true,
    Toolbar: false,

    closeButton: "top",

    Carousel: {
      Dots: true,
      on: {
        change: (that) => {
          myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });
  const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    preload: 1,
    friction: 0.89,
    slidesPerPage: 1,
    fill: true,
    center: true,
    Autoplay: {
      timeout: 6000,
    },
  });
}
document.addEventListener("click", function (e) {
  // Hamburger menu
  if (e.target.classList.contains("hamburger-toggle")) {
    e.target.children[0].classList.toggle("active");
  }
});
// lazyloadimage
// let images = document.querySelectorAll("source, img");

// if ("IntersectionObserver" in window) {
//   // IntersectionObserver Supported
//   let config = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.2,
//   };

//   let observer = new IntersectionObserver(onChange, config);
//   images.forEach((img) => observer.observe(img));

//   function onChange(changes, observer) {
//     changes.forEach((change) => {
//       if (change.intersectionRatio > 0) {
//         // Stop watching and load the image
//         loadImage(change.target);
//         observer.unobserve(change.target);
//       }
//     });
//   }
// } else {
//   // IntersectionObserver NOT Supported
//   images.forEach((image) => loadImage(image));
// }

// function loadImage(image) {
//   image.classList.add("fade-in");
//   if (image.dataset && image.dataset.src) {
//     image.src = image.dataset.src;
//   }

//   if (image.dataset && image.dataset.srcset) {
//     image.srcset = image.dataset.srcset;
//   }
// }
if (".tippy".length > 0) {
  tippy(".tippy", {
    content(reference) {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    interactive: true,
    theme: "light",
  });
}

function classToggle() {
  const navs = document.querySelectorAll(".nav-cruise");

  navs.forEach((nav) => nav.classList.toggle("nav-bgr"));
}

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", classToggle);


// fix nav
//   scroll
let scrollpos = window.scroll;
const header = document.querySelector(".header");
const stickyMenu = document.querySelector('.nav-cruise');
const headerHeight = header.offsetHeight;
const stickyMenuHeight = stickyMenu.offsetHeight;


const add_class_on_scroll = () => stickyMenu.classList.add("fade-in");
const remove_class_on_scroll = () => stickyMenu.classList.remove("fade-in");
window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  //   const padHeight = header.outerHeight;
  if (scrollpos >= headerHeight) {
    add_class_on_scroll();
    // document.body.style.paddingTop = header_height + 'px'
  } else {
    remove_class_on_scroll();
    // document.body.style.paddingTop = '0px'; 
  }
})


const pos = document.querySelector(".bgr-paralax .p-5");
pos.addEventListener("mousemove", e => {
  pos.style.setProperty('--x', e.clientX + "px");
  pos.style.setProperty('--y', e.clientY + "px");
})
// 
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

