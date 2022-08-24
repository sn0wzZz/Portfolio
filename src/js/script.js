import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

//////////////////////////////////////////////////
// Swiper slider
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    // pauseOnMouseEnter:true
  },
})

//////////////////////////////////////////////////
// Sticky navbar
const sec = document.querySelector('.header')
const nav = document.querySelector('.nav')
const navHeight = nav.getBoundingClientRect().height


const stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const secObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-90px`,
  // rootMargin: `-${navHeight}px`,
})

secObserver.observe(sec)

//////////////////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: '30px'
})

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

//////////////////////////////////////////////////
// Site Elements zoom in/out
const siteImgs = document.querySelectorAll('.site-img')
const headerGliph = document.querySelector('.gliph__icon')

const handleScale = function (e) {
  if (
    e.target.classList.contains('site-img') ||
    e.target.classList.contains('gliph__icon')
  ) {
    const targetedElement = e.target
    console.log(targetedElement)

    targetedElement.style.transform = `scale(${this})`
  }
}

headerGliph.addEventListener('mouseover', handleScale.bind(1.15))
headerGliph.addEventListener('mouseout', handleScale.bind(1))

siteImgs.forEach(img=>{
  img.addEventListener('mouseover', handleScale.bind(1.03))
  img.addEventListener('mouseout', handleScale.bind(1))
})
