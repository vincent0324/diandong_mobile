var Mall = require('./Mall');
var mall = new Mall();

var React = require('react');
var ReactDOM = require('react-dom');
var City = require('../city/City.react');

ReactDOM.render(<City/>, document.getElementById('mall-local-city'));
