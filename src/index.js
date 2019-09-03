import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import Names from './components/names/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
));

ReactDOM.render(
     <Provider store={store}>
         <Names/>
     </Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
