import { createAction } from 'redux-actions';
import initialState from './initialState';
import formatActionTypeNames from '../helpers/formatActionTypeNames';

import { actions as sandboxActions } from './sandbox.reducer';

export const actions = formatActionTypeNames({
	boot: 'BOOT',
	booted: 'BOOTED',
	toggleHamburgerMenu: 'TOGGLE_HAMBURGER_MENU',
}, 'APP');

export const appActions = {
  boot: createAction(actions.boot),
  booted: createAction(actions.booted),
  toggleHamburgerMenu: createAction(actions.toggleHamburgerMenu),
};

export default (state = initialState.app, action) => {
  const { payload } = action;
  switch (action.type) {

    case actions.booted:
    	let { mainNav } = payload;

    	return {
        ...state,
        mainNav,
        token: payload.token,
        booted: true,
				isLoggedIn: payload.token ? true : false,
      };

		case actions.toggleHamburgerMenu:
			return {
				...state,
				showHamburgerMenu: payload || !state.showHamburgerMenu,
			};

		case sandboxActions.loginComplete:
			let { token } = payload;

			return {
				...state,
				isLoggedIn: true,
				token,
			};

		case sandboxActions.logoutComplete:
			return initialState.app;

    default:
      return state;
  }
}