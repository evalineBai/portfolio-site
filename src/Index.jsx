import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import AppWithRouter from './components/App';

ReactDOM.render(<Router><AppWithRouter /></Router>, document.getElementById('app'));