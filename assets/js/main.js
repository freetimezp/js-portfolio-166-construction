/*-- show menu --*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


/*-- remove menu --*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*-- change background header --*/
const bgHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);


/*-- services swiper slider --*/
const swiperServices = new Swiper(".services__swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});


/*-- show scrollup button --*/
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');

    this.scrollY >= 350
        ? scrollup.classList.add('show-scroll')
        : scrollup.classList.remove('show-scroll');
};

window.addEventListener("scroll", scrollUp);


/*-- scroll section active --*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);