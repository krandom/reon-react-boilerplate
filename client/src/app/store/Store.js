import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers/root.reducer';

import apiSaga from '../saga/api.saga';
import appSaga from '../saga/app.saga';
import authSaga from '../saga/auth.saga';
import sandboxSaga from '../saga/sandbox.saga';
import websocketSaga from '../saga/websocket.saga';

import { setupSocket } from '../middleware/websocket.middleware';

const saga = createSagaMiddleware();

export let socket = null;

export const history = createBrowserHistory();
export const mainStore = ({ initialState = {} } = {}) => {
	const router = routerMiddleware(history);

	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(saga, router))
	);

	saga.run(apiSaga);
	saga.run(appSaga);
	saga.run(authSaga);
	saga.run(sandboxSaga);
	saga.run(websocketSaga);

	socket = setupSocket(store);

	return store;
};
