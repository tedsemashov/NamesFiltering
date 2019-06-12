import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Names from './components/names/names';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Names />, document.getElementById('root'));

serviceWorker.unregister();
