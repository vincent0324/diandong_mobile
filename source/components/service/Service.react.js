var React = require('react');

require('./service.css');

var Service = React.createClass({

    render: function() {
        return (
            <div id="service" className="service">
                <div className="wrap">
                    <a className="service-item-helper" href="http://www.diandong.com/yaohao/" title="电动汽车摇号查询">
                        <i></i>
                        <em>摇号助手</em>
                    </a>
                    <a className="service-item-product" href="http://car.diandong.com/" title="电动汽车车型库">
                        <i></i>
                        <em>车型大全</em>
                    </a>
                    <a className="service-item-test" href="http://www.diandong.com/tiyandian/" title="新能源汽车试驾">
                        <i></i>
                        <em>免费试驾</em>
                    </a>
                    <a className="service-item-mall" href="http://www.diandong.com/mall/" title="新能源汽车导购">
                        <i></i>
                        <em>限时特惠</em>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Service;
