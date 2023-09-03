// header script start

const header = document.querySelector(".header")
  window.onscroll = function () {
    if (window.scrollY > 40) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };

// header script end

// hidden header script start

let previousScroll = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    header.classList.add('header_hidden')
  } else {
    header.classList.remove('header_hidden')
  }
  previousScroll = currentScroll;
});

// hidden header script end

// burger script start

const burgerIcon = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");
const body = document.querySelector("body");
  burgerIcon.onclick = function () {
    navigation.classList.add("header__nav_active");
    body.classList.add("lock")
  };

const closeIcon = document.querySelector(".header__nav-close");
  closeIcon.onclick = function () {
    navigation.classList.remove("header__nav_active");
    body.classList.remove("lock")
  };

// burger script end

// scroll main button script start

const scrollArrow = document.querySelector('.main__icon-scroll');
const sectionPlaces = document.querySelector('.section-places');

scrollArrow.addEventListener('click', () => {
  sectionPlaces.scrollIntoView({
    behavior: "smooth",
  })
})

// scroll main button script end

// scroll place buttons script start

const placeButton = document.querySelector('.places__item-back__link');
const placeBlock = document.querySelector('.section-tours__place-image-wrapper');
const headerHeight = header.clientHeight;

// scroll place buttons script end

// Text buttons sctipt start

let reviewsButtonOn = document.querySelectorAll(".section-reviews__button-on");
let textHidden = document.querySelectorAll(".reviews__text-hidden");
  function showText1 () {
    for(let i = 0; i <  reviewsButtonOn.length; i++) {
      reviewsButtonOn[0].classList.toggle("section-reviews__button-on_active");
      textHidden[0].classList.toggle("reviews__text-hidden_active");
    };   
  };

  function showText2 () {
    for(let i = 0; i <  reviewsButtonOn.length; i++) {
      reviewsButtonOn[1].classList.toggle("section-reviews__button-on_active");
      textHidden[1].classList.toggle("reviews__text-hidden_active");
    };   
  };

  function showText3 () {
    for(let i = 0; i <  reviewsButtonOn.length; i++) {
      reviewsButtonOn[2].classList.toggle("section-reviews__button-on_active");
      textHidden[2].classList.toggle("reviews__text-hidden_active");
    };   
  };

// Text buttons script end

// Form script start

const contactButton = document.querySelector('.section-contacts__btn');
const userName = document.querySelector('.contact__user-name');
const userEmail =  document.querySelector('.contact__user-email');
const userReview =  document.querySelector('.contact__user-review');

// Form script end