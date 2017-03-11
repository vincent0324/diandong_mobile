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
import Focus from './components/focus/Focus';
let focus = new Focus();

// service
import Service from './components/service/Service.react';
render(<Service/>, document.getElementById('service-holder'));

// news
import News from './components/news/News';
let news = new News();

// guide
import Guide from './components/guide/Guide';
let guide = new Guide();

// mall
import Mall from './components/mall/Mall';
let mall = new Mall();

// social
import Social from './components/social/Social';
let social = new Social();

// footer
import Footer from './components/footer/Footer.react';
render(<Footer/>, document.getElementById('footer-holder'));

// appoverlay
import AppOverlayStatic from './components/appOverlayStatic/AppOverlayStatic.react';
render(<AppOverlayStatic/>, document.getElementById('app-overlay'));
