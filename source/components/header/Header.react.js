var React = require('react');
var OverlayButton = require('./OverlayButton.react');
var Overlay = require('./Overlay.react');

require('./header.css');

var Header = React.createClass({

    getInitialState: function() {
        return {hasOverlay: false}
    },

    toggleOverlay: function() {
        this.setState({
            hasOverlay: !this.state.hasOverlay
        });
    },

    render: function() {
        return (
            <header id="header" className="header header-fixed" className={this.state.hasOverlay
                ? "header header-fixed"
                : "header"}>

                <div className="header-content">
                    <div className="wrap">
                        <div id="logo" className="logo fn-left">
                            <a href="http://m.diandong.com/">电动邦</a>
                        </div>
                        <div id="slogan" className="slogan fn-left">
                            <em>买电动车 上电动邦</em>
                        </div>
                        <div className="header-overlay-btn fn-right">
                            <OverlayButton handleClick={this.toggleOverlay} overlayState={this.state.hasOverlay}/>
                        </div>
                    </div>
                </div>

                <Overlay overlayState={this.state.hasOverlay}/>

            </header>
        );
    }
});

module.exports = Header;
