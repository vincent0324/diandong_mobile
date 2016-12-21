var React = require('react');

var City = React.createClass({

    render: function() {
        return (
            <div className="current-city">
                <i className="icon">&#xe659;</i>
                <a href="http://www.diandong.com/city/">北京</a>
            </div>
        );
    }
});

module.exports = City;
