// header script start

const header = document.querySelector(".header")
    window.onscroll = function () {
        if (window.pageYOffset > 40) {
            header.classList.add("header_active");
        } else {
            header.classList.remove("header_active");
        }
    };

// header script end

// burger script start

const burgerIcon = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");
    burgerIcon.onclick = function () {
        navigation.classList.add("header__nav_active");
    };

const closeIcon = document.querySelector(".header__nav-close");
    closeIcon.onclick = function () {
        navigation.classList.remove("header__nav_active");
    };

// burger script end

// buttons sctipt start

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

// buttons script end