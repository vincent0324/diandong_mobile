var React = require('react');
var ReactDOM = require('react-dom');

require('./css/common.css');
require('./css/home.css');

// header
var Header = require('./components/header/Header.react');

ReactDOM.render(<Header/>, document.getElementById('header-holder'));


// filter
var Filter = require('./components/filter/Filter');
var filter = new Filter();


// focus
var Focus = require('./components/focus/Focus');
var focus = new Focus();


// service
var Service = require('./components/service/Service.react');
ReactDOM.render(<Service/>, document.getElementById('service-holder'));


// news
var News = require('./components/news/News');
var news = new News();


// guide
var Guide = require('./components/guide/Guide');
var guide = new Guide();


// mall
var Mall = require('./components/mall/Mall');
var mall = new Mall();


// social
var Social = require('./components/social/Social');
var social = new Social();


// footer
var Footer = require('./components/footer/Footer.react');

ReactDOM.render(<Footer/>, document.getElementById('footer-holder'));

// appoverlay
// var AppDownloadOverlay = require('./components/appDownloadOverlay/AppDownloadOverlay.react');
//
// ReactDOM.render(<AppDownloadOverlay/>, document.getElementById('app-download-overlay'));
