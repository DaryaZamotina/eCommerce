import { sliderMaker } from "./sliderInterface";

export function getSlider(links?: Array<string>) {
    sliderMaker(links);

    const leftButton = document.getElementById("leftButton");
    leftButton.textContent = "left";

    const rightButton = document.getElementById("rightButton");
    rightButton.textContent = "right";

    const carousel = document.getElementById("sliderWrapper");

    let sliderChange = (count: number) => {
            
        let activeSlide: HTMLElement  = document.querySelector('[data-active]');
        let carouselSlides =  [...document.querySelectorAll('.slide')];
        console.log("carouselSlides = " + carouselSlides);
        console.log("typeof carouselSlides = " + typeof carouselSlides);
    
           let currentIndex: number = carouselSlides.indexOf(activeSlide);
            let newIndex: number = currentIndex + count;
    
            if (newIndex < 0) newIndex = carouselSlides.length - 1;
            if (newIndex >= carouselSlides.length) newIndex = 0;
    
            (carouselSlides[newIndex] as HTMLElement).dataset.active = 'true';
            delete activeSlide.dataset.active;
        }

        leftButton.addEventListener("click", function() {
            sliderChange(1);
        })
    
        rightButton.addEventListener("click", function() {
            sliderChange(-1); 
        });

    /*let onNextSlide = () => sliderChange(1);
    let onPrevSlide = () => sliderChange(-1); 

    leftButton.addEventListener("click", function() {
        onNextSlide;
    })

    rightButton.addEventListener("click", function() {
        onPrevSlide;
    })
    */

    let time = 5000;
    setInterval(function(){
        sliderChange(1);
    }, time);
    //setInterval(onNextSlide, time);

    let showSlide = (key: string) => {
        if (key == 'ArrowLeft') {sliderChange(1)};
        if (key == 'ArrowRight') {sliderChange(-1)};

    carousel.addEventListener("keydown", function() {
        showSlide(key);
    })
}
}