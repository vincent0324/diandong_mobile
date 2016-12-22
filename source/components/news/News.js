define(function(require, exports, module) {

    var $ = require('zepto');

    var News = function() {
        this.init();
    };

    News.prototype = {
        init: function() {
            this.bindEvent();
        },

        bindEvent: function() {
            $('.news-nav a').on('click', function() {
                var index = $('.news-nav a').index(this);

                $('.news-nav a').removeClass('current').eq(index).addClass('current');
                $('.news-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = News;
});
