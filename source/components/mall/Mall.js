define(function(require, exports, module) {

    var $ = require('jquery');
    var Swiper = require('swiper');
    var Countdown = require('countdown');
    var Area = require('area');

    require('./mall.css');

    var Mall = function() {
        this.init();
    };

    Mall.prototype = {

        cityListOfGuangZhou: [
            '4401',
            '4406',
            '4418',
            '4402',
            '4412',
            '4407',
            '4420',
            '4404',
            '4453',
            '4417',
            '4409',
            '4408',
            '4410'
        ],

        init: function() {
            this.initOrderSwiper();
            this.initEventSwiper();
            this.getLocalNews();
            this.setCountdown();
        },

        initOrderSwiper: function() {
            var orderSwiper = new Swiper('.mall-container', {
                wrapperClass: 'mall-wrapper',
                slideClass: 'mall-slide',
                autoplay: 3000,
                loop: true,
                mode: 'vertical'
            });
        },

        initEventSwiper: function() {
            var eventSwiper = new Swiper('.event-container', {
                wrapperClass: 'event-wrapper',
                slideClass: 'event-slide',
                pagination: '.event-pages',
                loop: true
            });
        },

        getLocalNews: function() {
            var context = this;

            Area.init(function() {
                var areaIndex = Area.id.substring(0, 2);

                if (areaIndex === '44') {
                    $('.mall-local-item').addClass('fn-hide');

                    if (context.cityListOfGuangZhou.join('').indexOf(Area.id) >= 0) {
                        $('.mall-local-guangzhou').removeClass('fn-hide');
                        $('.mall-local-header span').html('广州');
                    } else {
                        $('.mall-local-shenzhen').removeClass('fn-hide');
                        $('.mall-local-header span').html('深圳');
                    }
                } else {
                    $('.mall-local-item').addClass('fn-hide');
                    $('.mall-local-beijing').removeClass('fn-hide');
                    $('.mall-local-header span').html('北京');
                }
            });
        },

        setCountdown: function() {
            var now = new Date().getTime();

            $('.event-item-countdown').each(function(index) {
                var day = $(this).find('span').eq(0),
                    hour = $(this).find('span').eq(1),
                    minute = $(this).find('span').eq(2),
                    second = $(this).find('span').eq(3),
                    endTime = parseInt($(this).data('endtime'));

                if (!endTime) {
                    return;
                } else if (endTime > now) {
                    var cd = new Countdown({
                        elements: {
                            day: day,
                            hour: hour,
                            minute: minute,
                            second: second
                        },
                        now: now,
                        end: endTime
                    });
                } else {
                    $(this).html('该活动已结束');
                }
            });

            $('.mall-item-countdown').each(function(index) {
                var day = $(this).find('span').eq(0),
                    hour = $(this).find('span').eq(1),
                    minute = $(this).find('span').eq(2),
                    second = $(this).find('span').eq(3),
                    endTime = parseInt($(this).data('endtime'));

                if (!endTime) {
                    return;
                } else if (endTime > now) {
                    var cd = new Countdown({
                        elements: {
                            day: day,
                            hour: hour,
                            minute: minute,
                            second: second
                        },
                        now: now,
                        end: endTime
                    });
                } else {
                    $(this).html('该活动已结束');
                }
            });
        }
    };

    module.exports = Mall;
});
