var React = require('react');
var OverlayButton = require('./OverlayButton.react');
var City = require('./City.react');
var Search = require('./Search.react');
var Nav = require('./Nav.react');

var Header = React.createClass({

    getInitialState: function() {
        return {hasOverlay: false}
    },

    render: function() {
        return (
            <header id="header" className="header header-fixed">

                <div className="header-content">
                    <div className="wrap">
                        <div id="logo" className="logo fn-left">
                            <a href="http://m.diandong.com/">电动邦</a>
                        </div>

                        <div id="slogan" className="slogan fn-left">
                            <em>买电动车 上电动邦</em>
                        </div>

                        <div className="header-overlay-btn fn-right">
                            <OverlayButton/>
                        </div>
                    </div>
                </div>

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
                            <div id="user-holder"></div>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
});

module.exports = Header;
