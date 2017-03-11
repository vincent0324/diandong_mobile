import React from 'react';
import Cookie from 'cookie';

import './appOverlay.css';

class AppOverlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasOverlay: true
        }
    }

    componentWillMount() {
        var cookieValueOfOverlay = Cookie.get('appoverlay');

        if (cookieValueOfOverlay && cookieValueOfOverlay === '1') {
            this.setState({hasOverlay: false});
        } else {
            this.setState({hasOverlay: true});
        }
    }

    removeOverlay() {
        this.setState({hasOverlay: false});

        Cookie.set('appoverlay', '1', {expires: 1});
    }

    render() {

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
                        <a className="overlay-close" onClick={this.removeOverlay.bind(this)} href="javascript:;">
                            <i className="icon">&#xe601;</i>
                        </a>
                    </div>
                </div>
            );
        }

        return null;
    }
};

export default AppOverlay;
