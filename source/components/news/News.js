define(function(require, exports, module) {

    var $ = require('zepto');

    var News = function() {
        this.init();
    };

    News.prototype = {
        init: function() {
            console.log('news');
        }
    };

    module.exports = News;
});
