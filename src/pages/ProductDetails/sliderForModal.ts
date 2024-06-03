//import { sliderMaker } from './sliderInterface';

export function getModalSlider() {
  const leftButton = document.getElementById('leftButtonM');
  leftButton.textContent = 'left';

  const rightButton = document.getElementById('rightButtonM');
  rightButton.textContent = 'right';

  const carousel = document.getElementById('sliderWrapperM');

  let sliderChange = (count: number) => {
    let activeSlide: HTMLElement = document.querySelector('[data-active]');
    let carouselSlides = [...document.querySelectorAll('.slideM')];

    let currentIndex: number = carouselSlides.indexOf(activeSlide);
    let newIndex: number = currentIndex + count;

    if (newIndex < 0) newIndex = carouselSlides.length - 1;
    if (newIndex >= carouselSlides.length) newIndex = 0;

    (carouselSlides[newIndex] as HTMLElement).dataset.active = 'true';
    delete activeSlide.dataset.active;
  };

  leftButton.addEventListener('click', function () {
    sliderChange(1);
  });

  rightButton.addEventListener('click', function () {
    sliderChange(-1);
  });

}
