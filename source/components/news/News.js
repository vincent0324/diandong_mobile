import $ from 'zepto';

import './news.css';

class News {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.news-nav a').on('click', function() {
            var index = $('.news-nav a').index(this);

            $('.news-nav a').removeClass('current').eq(index).addClass('current');
            $('.news-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default News;
