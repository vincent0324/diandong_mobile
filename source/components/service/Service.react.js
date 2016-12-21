var React = require('react');

var Service = React.createClass({

    render: function() {
        return (
            <div id="service" className="service">
                <div className="wrap">
                    <a className="service-item-helper">
                        <i></i>
                        <em></em>
                    </a>
                    <a className="service-item-product">
                        <i></i>
                        <em></em>
                    </a>
                    <a className="service-item-test">
                        <i></i>
                        <em></em>
                    </a>
                    <a className="service-item-mall">
                        <i></i>
                        <em></em>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Service;
