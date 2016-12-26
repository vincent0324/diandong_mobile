var React = require('react');
var User = require('user');
var user = new User();

var UserPanel = React.createClass({

    getInitialState: function() {
        return {userId: null, userAvatar: null};
    },

    componentWillMount: function() {
        if (user.id !== '') {
            this.setState({userId: user.id, userAvatar: user.avatar});
        }
    },

    render: function() {

        if (this.state.userId) {

            return (
                <div className="user-panel">
                    <i></i>
                    <div className="user-panel-avatar">
                        <a href="http://passport.diandong.com/ark/baseinfo"><img src={this.state.userAvatar}/></a>
                    </div>
                    <i></i>
                </div>
            );
        }

        return (
            <div className="user-panel">
                <i></i>
                <div className="user-login-btn">
                    <a href="http://passport.diandong.com/ark/login/">登录</a>
                </div>
                <i></i>
            </div>
        );
    }
});

module.exports = UserPanel;
