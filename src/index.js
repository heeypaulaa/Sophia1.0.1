import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootUsuReducer from './reducers/rootUsuReducer';
// import rootExeReducer from './reducers/rootUsuReducer';

import{ fetchAllUsus } from './actions/index';
//import registerServiceWorker from './registerServiceWorker';

const storeUsu = createStore( rootUsuReducer, applyMiddleware(thunk) );
storeUsu.dispatch(fetchAllUsus());

//import store from './store';

//import { addUsu } from './actions/taskActions';

ReactDOM.render((
	<Provider store = {storeUsu}>
		<App />
	</Provider>
	), document.getElementById('root')
);

window.store = storeUsu;
//window.addUsu = addUsu;
//registerServiceWorker();