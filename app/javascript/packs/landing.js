import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/provider';
import Login from '../components/landing/login';
import Register from '../components/landing/register';

render(<Provider><Login /><Register /></Provider>, document.querySelector('#root'));
