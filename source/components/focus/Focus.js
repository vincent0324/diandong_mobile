import Swiper from 'swiper';

import './focus.css';

class Focus {

    constructor() {
        this.init();
    }

    init() {
        this.initFocusSwiper();
    }

    initFocusSwiper() {
        let focusSwiper = new Swiper('.focus-container', {
            pagination: '.focus-pages',
            loop: true,
            grabCursor: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            wrapperClass: 'focus-wrapper',
            slideClass: 'focus-slide'
        });
    }
};

export default Focus;
