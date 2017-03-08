import React from 'react';

import './appOverlayStatic.css';

class AppOverlayStatic extends React.Component {

    render() {
        return (
            <div className="app-download-overlay">
                <div className="wrap">
                    <div className="overlay-logo"></div>
                    <div className="overlay-text">
                        <strong>电动邦</strong> 新能源汽车第一导购平台
                    </div>
                    <a className="overlay-button" href="http://m.diandong.com/app/">下载APP</a>
                </div>
            </div>
        );
    }
};

export default AppOverlayStatic;
