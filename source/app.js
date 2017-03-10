import React from 'react';
import {render} from 'react-dom';

import './css/common.css';
import './css/home.css';

// header
import Header from './components/header/Header.react';
render(<Header/>, document.getElementById('header-holder'));

// filter
import Filter from './components/filter/Filter';
let filter = new Filter();

// focus
const Focus = require('./components/focus/Focus');
const focus = new Focus();

// service
import Service from './components/service/Service.react';
render(<Service/>, document.getElementById('service-holder'));

// news
const News = require('./components/news/News');
const news = new News();


// guide
const Guide = require('./components/guide/Guide');
const guide = new Guide();


// mall
const Mall = require('./components/mall/Mall');
const mall = new Mall();


// social
const Social = require('./components/social/Social');
const social = new Social();

// footer
import Footer from './components/footer/Footer.react';
render(<Footer/>, document.getElementById('footer-holder'));

// appoverlay
import AppOverlayStatic from './components/appOverlayStatic/AppOverlayStatic.react';
render(<AppOverlayStatic/>, document.getElementById('app-overlay'));
