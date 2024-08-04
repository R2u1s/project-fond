import './pages/index.css';

import Carousel from './scripts/utils/carousel.js';
import ScreenSizeTracker from './scripts/utils/ScreenSizeTracker.js';
import toggleSubmenu from './scripts/utils/toggleSubmenu.js';
import Blog from './scripts/blocks/blog.js';
import Header from './scripts/blocks/header.js';
import initPartners from './scripts/blocks/partners.js';
import initDonationSection from './scripts/blocks/donation-section.js';

const heroEl = document.querySelector('.hero-banner');
const heroCarousel = new Carousel(heroEl);
heroCarousel.start();

const friendsEl = document.querySelector('.our-friends > .carousel');
const friendsCarousel = new Carousel(friendsEl);
friendsCarousel.start();

const blog = new Blog(document.querySelector('.blog'));

const header = new Header(document.querySelector('.header'));

ScreenSizeTracker.addListener(768, (isBigger) => {
  if (isBigger) {
    blog.setNormal();
  } else {
    blog.setCarousel(true);
  }
});

ScreenSizeTracker.addListener(576, (isBigger) => {
  header.onWidthCnahge(!isBigger);
});

const footerSubmenuButton = document.querySelector('.footer__menu-button');
const programSubmenu = document.querySelector('.submenu_type_program');

toggleSubmenu(footerSubmenuButton, programSubmenu);

const subscriptionForm = document.querySelector('.subscription__form');
const resetButton = document.querySelector('.subscription__reset');

resetButton.addEventListener('click', () => {
  subscriptionForm.reset();
});

initDonationSection(false);
initPartners();
