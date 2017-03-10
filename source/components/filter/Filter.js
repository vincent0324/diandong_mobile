import $ from 'zepto';
import QuickSelect from 'quickselect';

import './filter.css';

class Filter {

    constructor() {
        this.init();
    }

    init() {
        QuickSelect.init();
        this.bindEvent();
    }

    bindEvent() {
        $('.filter-tab-button').on('click', function() {
            let index = $('.filter-tab-button').index(this);

            $('.filter-tab-button').removeClass('current').eq(index).addClass('current');
            $('.filter-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default Filter;
