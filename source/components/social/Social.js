import './social.css';

class Social {

    constructor() {
        this.init();
    }

    init() {
        this.setSocialListWidth();
        this.setFriendListWidth();
    }

    getSocialItems() {
        return document.querySelectorAll('.social-item');
    }

    setSocialListWidth() {
        let socialListLength = this.getSocialItems().length;
        let socialListWidth = 10.4 * socialListLength;

        document.querySelector('.social-list').style.width = socialListWidth + 'rem';
    }

    getFriendItems() {
        return document.querySelectorAll('.friend-item');
    }

    setFriendListWidth() {
        let friendListLength = this.getFriendItems().length;
        let friendListWidth = 12.2 * friendListLength;

        document.querySelector('.friend-list').style.width = friendListWidth + 'rem';
    }
};

export default Social;
