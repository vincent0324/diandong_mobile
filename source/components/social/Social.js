define(function(require, exports, module) {

    require('./social.css');

    var Social = function() {
        this.init();
    };

    Social.prototype = {

        init: function() {
            this.setSocialListWidth();
            this.setFriendListWidth();
        },

        getSocialItems: function() {
            return document.querySelectorAll('.social-item');
        },

        setSocialListWidth: function() {
            var socialListLength = this.getSocialItems().length;
            var socialListWidth = 10.4 * socialListLength;

            document.querySelector('.social-list').style.width = socialListWidth + 'rem';
        },

        getFriendItems: function() {
            return document.querySelectorAll('.friend-item');
        },

        setFriendListWidth: function() {
            var friendListLength = this.getFriendItems().length;
            var friendListWidth = 12.2 * friendListLength;

            document.querySelector('.friend-list').style.width = friendListWidth + 'rem';
        }
    };

    module.exports = Social;
});
