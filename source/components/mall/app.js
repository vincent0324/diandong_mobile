import React from 'react';
import {render} from 'react-dom';
import City from '../city/City.react';
import Mall from './Mall';

let mall = new Mall();

render(<City/>, document.getElementById('mall-local-city'));
