import '../../../public/assets/css/products.css';
import { getModalSlider } from './sliderForModal';

export function openModaWindowForImgs() {
  const productCard = document.getElementById('productCard');

  const modalWindowForImgs = document.createElement('div');
  modalWindowForImgs.className = 'modalWindowForImgs';
  modalWindowForImgs.id = 'modalWindowForImgs';
  productCard.append(modalWindowForImgs);

  const btnClose = document.createElement('button');
  btnClose.className = 'btnClose';
  btnClose.id = 'btnClose';
  btnClose.textContent = 'x';
  modalWindowForImgs.append(btnClose);

  const links = JSON.parse(localStorage.getItem('currentLinksToImgs'));
  getModalSlider();

  btnClose.addEventListener('click', function () {
    modalWindowForImgs.remove();
  });

  const carousel: HTMLElement = document.createElement('sliderWrapper');
  carousel.className = 'carouselM';
  carousel.id = 'carouselM';
  carousel.tabIndex = -1;
  modalWindowForImgs.append(carousel);

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
  }

  slides[0].dataset.active = 'true';
}
