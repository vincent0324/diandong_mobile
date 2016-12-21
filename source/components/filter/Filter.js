define(function(require, exports, module) {

    var $ = require('zepto');
    var QuickSelect = require('quickselect');

    require('./filter.css');

    var Filter = function() {
        this.init();
    };

    Filter.prototype = {

        init: function() {
            QuickSelect.init();
            this.bindEvent();
        },

        bindEvent: function() {

            $('.filter-tab-button').on('click', function() {
                var index = $('.filter-tab-button').index(this);

                $('.filter-tab-button').removeClass('current').eq(index).addClass('current');
                $('.filter-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = Filter;
});
