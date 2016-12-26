var React = require('react');

var Nav = React.createClass({

    render: function() {
        return (
            <nav id="nav" className="nav">
                <div className="nav-wrapper clearfix">
                    <a href="" className="nav-item-home">首页</a>
                    <a href="" className="nav-item-news">资讯</a>
                    <a href="" className="nav-item-product">车型库</a>
                    <a href="" className="nav-item-test">评测</a>
                    <a href="" className="nav-item-video">视频</a>
                    <a href="" className="nav-item-mall">商城</a>
                    <a href="" className="nav-item-shop">体验店</a>
                    <a href="" className="nav-item-bbs">社区</a>
                    <a href="" className="nav-item-app">APP下载</a>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;
