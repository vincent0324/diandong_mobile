var React = require('react');

var OverlayButton = React.createClass({

    render: function() {

        if (this.props.overlayState) {
            return (
                <a href="javascript:;" onClick={this.props.handleClick}>
                    <i className="icon">&#xe601;</i>
                </a>
            );
        }

        return (
            <a href="javascript:;" onClick={this.props.handleClick}>
                <i className="icon">&#xe63c;</i>
            </a>
        );
    }
});

module.exports = OverlayButton;
