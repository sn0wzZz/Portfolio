"use strict";
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navList = nav.querySelector(".nav__list");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};
const navObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
navObserver.observe(nav);
btnScrollTo.addEventListener("click", function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
    console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);
    // Scrolling
    // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
    section1.scrollIntoView({
        behavior: "smooth"
    });
});

//# sourceMappingURL=index.1c974c2f.js.map
