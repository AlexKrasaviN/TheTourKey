// header script start

const header = document.querySelector(".header");

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
const burderFirstLine = document.querySelector('.burger__line_first');
const burderSecondLine = document.querySelector('.burger__line_second');
const body = document.querySelector("body");
const shadow = document.querySelector('.shadow');

burgerIcon.onclick = function () {
  navigation.classList.toggle("header__nav_active");
  body.classList.toggle("lock");
  burderFirstLine.classList.toggle('active');
  burderSecondLine.classList.toggle('active');
  shadow.classList.toggle('active');
};

// burger script end

// scroll main button script start

const scrollArrow = document.querySelector('.main__icon-scroll');
const sectionPlaces = document.querySelector('.section-places');

if (scrollArrow) {
  scrollArrow.addEventListener('click', () => {
    sectionPlaces.scrollIntoView({
      behavior: "smooth"
    })
  });
}

// scroll main button script end