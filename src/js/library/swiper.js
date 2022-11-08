// swiper
// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  Thumbs,
  Autoplay,
  EffectFade,
  Lazy,
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const swiperTour = document.querySelectorAll('.swiper-tours');
if (swiperTour.length > 0) {
  const swiper1 = new Swiper(".swiper-tours", {
    modules: [Navigation, Pagination, Mousewheel, Thumbs, Lazy],
    slidesPerView: 1.2,
    autoHeight: false,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next-tours",
      prevEl: ".prev-tours",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.6,
      },
      768: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
}
const galleryOneboat = document.querySelectorAll('.galleryOneboat');
if (galleryOneboat.length > 0) {
  const swiper2 = new Swiper(".galleryOneboat", {
    modules: [Pagination, Mousewheel],
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
const thumbroomDetail = document.querySelectorAll('.thumb-room-detail');
if (thumbroomDetail.length > 0) {
  var swiper = new Swiper(".thumb-room-detail", {
    modules: [Navigation, Pagination, Mousewheel, Thumbs],
    spaceBetween: 10,
    slidesPerView: 4,
    autoHeight: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
}
const roomDetail = document.querySelectorAll('.room-detail');
if (roomDetail.length > 0) {
  var swiper = new Swiper(".room-detail", {
    modules: [Navigation, Pagination, Mousewheel, Thumbs],
    spaceBetween: 10,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
const sliderTestimonial = document.querySelectorAll('.slider-testimonial');
if (sliderTestimonial.length > 0) {
  const swiper3 = new Swiper(".slider-testimonial", {
    modules: [Pagination, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
      el: ".slider-testimonial .swiper-pagination",
      clickable: true,
    },
  });
}
// gallery
const swiperGallery = document.querySelectorAll('.swiper-gallery');
if (swiperGallery.length > 0) {
  const swiper4 = new Swiper(".swiper-gallery", {
    modules: [Navigation, Mousewheel, Autoplay],
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 40,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-gallery .btn-next",
      prevEl: ".swiper-gallery .btn-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 2.75,
      },
      1080: {
        slidesPerView: 3.25,
      },
      1280: {
        slidesPerView: 3.75,
      },
    },
  });
}
const blogSlider = document.querySelectorAll('.blog-slider');
if (blogSlider.length > 0) {
  const swiper5 = new Swiper(".blog-slider", {
    modules: [Pagination, Mousewheel, EffectFade, Autoplay],
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    direction: "vertical",
    autoplay: true,
    delay: 6000,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
}
// cruise
const cruiseiconInner = document.querySelectorAll('.cruise-icon-inner');
if (cruiseiconInner.length > 0) {
  const swiper6 = new Swiper(".cruise-icon-inner", {
    modules: [Navigation, Mousewheel, Autoplay],
    slidesPerView: "2",
    loop: false,
    autoplay: true,
    spaceBetween: 24,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".cruise-icon .swiper-button-next",
      prevEl: " .cruise-icon .swiper-button-prev",
    },
  });
}