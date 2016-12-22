var React = require('react');

require('./service.css');

var Service = React.createClass({

    render: function() {
        return (
            <div id="service" className="service">
                <div className="wrap">
                    <a className="service-item-helper" href="">
                        <i></i>
                        <em>摇号助手</em>
                    </a>
                    <a className="service-item-product" href="">
                        <i></i>
                        <em>车型大全</em>
                    </a>
                    <a className="service-item-test" href="">
                        <i></i>
                        <em>免费试驾</em>
                    </a>
                    <a className="service-item-mall" href="">
                        <i></i>
                        <em>限时特惠</em>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Service;
