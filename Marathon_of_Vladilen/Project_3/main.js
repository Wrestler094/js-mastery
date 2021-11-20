const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const numOfSlides = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

sidebar.style.top = `-${(numOfSlides - 1) * 100}vh`;

let activeSlideIndex = 0;

upButton.addEventListener('click', () => {
    changeSlide('up');
})

downButton.addEventListener('click', () => {
    changeSlide('down');
})

window.addEventListener('keydown', (evt) => {
    if (evt.code === 'ArrowUp') {
        changeSlide('up');
    }
    if (evt.code === 'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === numOfSlides) {
            activeSlideIndex = 0;
        }
    }
    else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = numOfSlides - 1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}