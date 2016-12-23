var React = require('react');

require('./footer.css');

var Footer = React.createClass({

    render: function() {
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
                            <div className="hotline-detail">购车热线：4000-990-666</div>
                            <div className="hotline-time">周一至周日(9:00 - 21:00) 法定假日除外</div>
                        </div>
                        <a href="tel:4000990666" className="footer-hotline-btn fn-right">
                            <i className="icon">&#xe634;</i>
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
                        <span className="fn-left">@2016电动邦</span>
                    </div>
                </div>
                <div id="return-top-holder" className="return-top-holder"></div>
            </div>
        );
    }
});

module.exports = Footer;
