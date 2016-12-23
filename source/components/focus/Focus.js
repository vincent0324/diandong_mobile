define(function(require, exports, module) {

    var $ = require('zepto');
    var Swiper = require('swiper');

    require('./focus.css');

    var Focus = function() {
        this.init();
    };

    Focus.prototype = {
        init: function() {
            this.initFocusSwiper();
        },
        initFocusSwiper: function() {
            var focusSwiper = new Swiper('.focus-container', {
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

    module.exports = Focus;
});
