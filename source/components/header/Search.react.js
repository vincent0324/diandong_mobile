var React = require('react');

var Search = React.createClass({

    render: function() {
        return (
            <div className="search-wrapper" id="search-wrapper">
                <div className="search-bar">
                    <input className="search-input" type="text"/>
                    <a className="search-submit-btn" href="javascript:;">
                        <i className="icon">&#xe60a;</i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Search;
