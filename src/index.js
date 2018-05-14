import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';
import registerServiceWorker from './registerServiceWorker';

//Displays the board js file onto the page
ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
