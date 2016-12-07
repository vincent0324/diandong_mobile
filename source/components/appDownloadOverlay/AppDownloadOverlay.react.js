var React = require('react');
var Cookie = require('cookie');

require('./appDownloadOverlay.css');

var AppDownloadOverlay = React.createClass({

    getInitialState: function() {
        return {hasOverlay: true};
    },

    componentWillMount: function() {
        var cookieValueOfOverlay = Cookie.get('appoverlay');

        if (cookieValueOfOverlay && cookieValueOfOverlay === '1') {
            this.setState({hasOverlay: false});
        } else {
            this.setState({hasOverlay: true});
        }
    },

    removeOverlay: function() {
        this.setState({
            hasOverlay: false
        });

        Cookie.set('appoverlay', '1', {expires: 1});
    },

    render: function() {

        if (this.state.hasOverlay) {

            return (
                <div className="app-download-overlay">
                    <div className="wrap">
                        <div className="overlay-logo"></div>
                        <div className="overlay-text">
                            <h5>电动邦手机客户端</h5>
                            <p>新能源汽车一站式服务平台</p>
                        </div>
                        <a className="overlay-button" href="http://m.diandong.com/app/">下载APP</a>
                        <a className="overlay-close" onClick={this.removeOverlay} href="javascript:;">
                            <i className="icon">&#xe601;</i>
                        </a>
                    </div>
                </div>
            );
        }

        return null;
    }
});

module.exports = AppDownloadOverlay;
