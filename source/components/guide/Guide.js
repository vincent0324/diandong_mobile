define(function(require, exports, module) {

    var Guide = function() {
        this.init();
    };

    Guide.prototype = {
        init: function() {
            console.log('guide');
        }
    };

    module.exports = Guide;
});
