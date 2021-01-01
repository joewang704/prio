import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/provider';
import Home from '../components/home';

render(<Provider><Home /></Provider>, document.querySelector('#root'));