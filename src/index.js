import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import store from './store';

import { addUsu } from './actions/taskActions';

ReactDOM.render((
	<Provider store = {store}>
		<App />
	</Provider>
	), document.getElementById('root')
);

window.store = store;
window.addUsu = addUsu;
