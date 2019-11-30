import Cookies from 'universal-cookie';

import { select, put, takeLatest } from 'redux-saga/effects';
import { privateCall } from './api.saga';
import { appActions } from '../reducers/app.reducer';

function* boot() {
	try {
		// Look for cookie and log user in if valid
		const cookies = new Cookies();
		let token = cookies.get('reon-mern-boilerplate-admin');
		const endpoint = yield select(s => s.config.endpoints.auth.validateCookie);
		const { user } = yield privateCall({ endpoint, payload: { token } });

		if (!user) {
			token = null;
			cookies.remove('reon-mern-boilerplate-admin');
		}

		// const endpoint = yield select(s => s.config.endpoints.user.getProfile);
		// const response = yield api({endpoint});

		yield put(appActions.booted({  user, token }));
	} catch (e) {}
}

export default function* appSaga() {
	yield takeLatest(appActions.boot, boot);
}