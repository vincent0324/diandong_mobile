import React from 'react';

import './footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            year: new Date().getFullYear()
        }
    }

    render() {
        return (
            <div id="footer" className="footer">
                <div id="feature-holder" className="feature-holder">
                    <div className="wrap">
                        <div className="feature-item feature-item-base">
                            <i></i>
                            <span>底价承诺</span>
                        </div>
                        <div className="feature-item feature-item-new">
                            <i></i>
                            <span>正品新车</span>
                        </div>
                        <div className="feature-item feature-item-test">
                            <i></i>
                            <span>多品牌试驾</span>
                        </div>
                        <div className="feature-item feature-item-manager">
                            <i></i>
                            <span>购车管家</span>
                        </div>
                    </div>
                </div>
                <div id="footer-hotline-holder" className="footer-hotline-holder">
                    <div className="wrap">
                        <div className="footer-hotline-text fn-left">
                            <div className="hotline-detail">有购车疑问?加微信:diandongbangkefu</div>
                            <div className="hotline-time">周一至周日(9:30 - 18:30) 法定假日除外</div>
                        </div>
                        <a href="javascript:;" className="footer-hotline-btn fn-right">
                            <i className="icon">&#xe63e;</i>
                        </a>
                    </div>
                </div>
                <div id="footer-text-holder" className="footer-text-holder">
                    <div className="wrap">
                        <div className="footer-text-list fn-right">
                            <a href="http://m.diandong.com/about/">关于我们</a>
                            <i>|</i>
                            <a href="http://m.diandong.com/guide/">帮助中心</a>
                            <i>|</i>
                            <a href="http://m.diandong.com/licence/">服务协议</a>
                            <i>|</i>
                            <a href="http://app.diandong.com/?app=guestbook&controller=index">意见反馈</a>
                        </div>
                        <span className="fn-left">@{this.state.year}电动邦</span>
                    </div>
                </div>
                <div id="return-top-holder" className="return-top-holder"></div>
            </div>
        );
    }
};

export default Footer;
