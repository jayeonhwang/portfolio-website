// Change header style when page scroll down

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Make home section fade out when scroll down to next section
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => home.style.opacity = 1 - window.scrollY / homeHeight);


//hide arrow-up button when window showing home

const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});
