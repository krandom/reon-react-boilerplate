import { createAction } from 'redux-actions';
import initialState from './initialState';
import formatActionTypeNames from '../helpers/formatActionTypeNames';

const actions = formatActionTypeNames({
	signup: 'SIGNUP',
	getExchangeRates: 'GET_EXCHANGE_RATES',
	setExchangeRates: 'SET_EXCHANGE_RATES',
}, 'SANDBOX');

export const sandboxActions = {
	signup: createAction(actions.signup),
  getExchangeRates: createAction(actions.getExchangeRates),
  setExchangeRates: createAction(actions.setExchangeRates),
};

export default (state = initialState.sandbox, action) => {
  const { payload } = action;

  switch (action.type) {

    case actions.setExchangeRates:
    	const { exchangeRates } = payload;

    	return {
        ...state,
        exchangeRates,
      };

    default:
      return state;
  	}
}