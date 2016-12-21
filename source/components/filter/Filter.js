define(function(require, exports, module) {

    var $ = require('jquery');

    var Filter = function() {
        this.init();
    };

    Filter.prototype = {
        init: function() {
            console.log('sss');
        }
    };

    module.exports = Filter;
});
