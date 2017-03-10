import $ from 'jquery';

import './guide.css';

class Guide {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.filter-sub-tab a').on('click', function() {
            let index = $(this).parents('.filter-sub-tab').find('a').index(this);
            let tabContent = $(this).parents('.filter-sub-tab').siblings('.filter-sub-tabcon');

            $(this).addClass('current').siblings('a').removeClass('current');
            tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
        });

        $('.filter-super-tab a').on('click', function() {
            let index = $(this).parent('.filter-super-tab').find('a').index(this);
            let tabContent = $(this).parents('.filter-super-tab').siblings('.filter-super-tabcon');

            $(this).addClass('current').siblings('a').removeClass('current');
            tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default Guide;
