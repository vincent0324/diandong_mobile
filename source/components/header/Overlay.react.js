var React = require('react');
var City = require('../city/City.react');
var Search = require('./Search.react');
var Nav = require('./Nav.react');
var UserPanel = require('./UserPanel.react');

var Overlay = React.createClass({

    render: function() {

        if (this.props.overlayState) {
            return (
                <div className="header-overlay">
                    <div className="wrap">

                        <div className="header-overlay-city">
                            <City/>
                        </div>

                        <div className="header-search-holder">
                            <Search/>
                        </div>

                        <div className="header-nav-holder">
                            <Nav/>
                        </div>

                        <div className="header-user-holder">
                            <div id="user-holder">
                                <UserPanel/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;

    }
});

module.exports = Overlay;
