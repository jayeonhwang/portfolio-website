'use strict';

const certificates = document.querySelector('.certificates');
const slides = document.querySelectorAll('.certificate');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;

// Create pagination dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function updateSlider() {
  certificates.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateSlider();
}

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});



let startX = 0;

certificates.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

certificates.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // swipe left → next
    goToSlide(currentIndex + 1);
  } else if (endX - startX > 50) {
    // swipe right → prev
    goToSlide(currentIndex - 1);
  }
});