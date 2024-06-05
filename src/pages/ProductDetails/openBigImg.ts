
import '../../../public/assets/css/bigWindow.css';
import '../../../public/assets/css/button.css';
import { getBigSlider } from './sliderForBigImg';

export function openBigImg() {
    const productCard: HTMLElement = document.getElementById('productCard');

    const bigWindow: HTMLDivElement = document.createElement("div");
    bigWindow.className = "bigWindow";
    bigWindow.id = "bigWindow";
    productCard.append(bigWindow);

    const links = JSON.parse(localStorage.getItem("currentLinksToImgs"));

    const btnClosed: HTMLButtonElement = document.createElement("button");
    btnClosed.className = "btnClosed";
    btnClosed.id = "btnClosed";
    btnClosed.textContent = 'x';
    bigWindow.append(btnClosed);

    btnClosed.addEventListener('click', function() {
        bigWindow.remove();
    })

    const carousel: HTMLElement = document.createElement('sliderWrapperM');
  carousel.className = 'carouselM';
  carousel.id = 'carouselM';
  carousel.tabIndex = -1;
  bigWindow.append(carousel);

  const btnWrapper: HTMLElement = document.createElement('div');
  btnWrapper.className = 'btnWrapperM';
  btnWrapper.id = 'btnWrapperM';
  carousel.append(btnWrapper);

  const leftButton: HTMLButtonElement = document.createElement('button');
  leftButton.className = 'leftButtonM';
  leftButton.id = 'leftButtonM';
  btnWrapper.append(leftButton);

  const rightButton: HTMLButtonElement = document.createElement('button');
  rightButton.className = 'rightButtonM';
  rightButton.id = 'rightButtonM';
  btnWrapper.append(rightButton);

  const slider: HTMLElement = document.createElement('div');
  slider.className = 'sliderM';
  slider.id = 'sliderM';
  carousel.append(slider);

  const slides: Array<HTMLElement> = [];

  for (let i = 0; i < links.length; i++) {
    const slide: HTMLElement = document.createElement('div');
    slide.className = 'slideM';
    slide.id = 'slideM';
    slider.append(slide);
    slides.push(slide);

    const imgSlide: HTMLImageElement = document.createElement('img');
    imgSlide.src = links[i];
    imgSlide.alt = `image ${i + 1}`;
    slide.append(imgSlide);

    slider.append(slide);

    slide.addEventListener("click", function() {
      openBigImg();
    })
  }

  slides[0].dataset.active = 'true';

  getBigSlider();
}