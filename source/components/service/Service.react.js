var React = require('react');

require('./service.css');

var Service = React.createClass({

    render: function() {
        return (
            <div id="service" className="service">
                <div className="wrap">
                    <a className="service-item-helper" href="http://www.diandong.com/yaohao/">
                        <i></i>
                        <em>摇号助手</em>
                    </a>
                    <a className="service-item-product" href="http://car.diandong.com/">
                        <i></i>
                        <em>车型大全</em>
                    </a>
                    <a className="service-item-test" href="http://www.diandong.com/tiyandian/">
                        <i></i>
                        <em>免费试驾</em>
                    </a>
                    <a className="service-item-mall" href="http://www.diandong.com/mall/">
                        <i></i>
                        <em>限时特惠</em>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Service;
