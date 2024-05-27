import '../../../public/assets/css/body.css';
import '../../../public/assets/css/slider.css';
import '../../../public/assets/css/button.css';

export function sliderMaker(links: Array<string>) {
  const sliderWrapper: HTMLElement = document.getElementById('sliderWrapper');

  const carousel: HTMLElement = document.createElement('sliderWrapper');
  carousel.className = 'carousel';
  carousel.id = 'carousel';
  carousel.tabIndex = -1;
  sliderWrapper.append(carousel);

  const btnWrapper: HTMLElement = document.createElement('div');
  btnWrapper.className = 'btnWrapper';
  btnWrapper.id = 'btnWrapper';
  carousel.append(btnWrapper);

  const leftButton: HTMLButtonElement = document.createElement('button');
  leftButton.className = 'leftButton';
  leftButton.id = 'leftButton';
  btnWrapper.append(leftButton);

  const rightButton: HTMLButtonElement = document.createElement('button');
  rightButton.className = 'rightButton';
  rightButton.id = 'rightButton';
  btnWrapper.append(rightButton);

  const slider: HTMLElement = document.createElement('div');
  slider.className = 'slider';
  slider.id = 'slider';
  carousel.append(slider);

  const slides: Array<HTMLElement> = [];

  for (let i = 0; i < links.length; i++) {
    const slide: HTMLElement = document.createElement('div');
    slide.className = 'slide';
    slide.id = 'slide';
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
