'use strict';

const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        removeActiveClass();
        slide.classList.add('slide--active');
    })
}

function removeActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('slide--active');
    })
}