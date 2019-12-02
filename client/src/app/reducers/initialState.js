import getEnvironment from '../helpers/getEnvironment';
import devConfig from './config/config.dev';

const getConfig = () => {
	const environment = getEnvironment();

	if (environment === 'dev') return devConfig;
};

export default {
	app: {
		booted: false,
		isLoggedIn: false,
		token: null,
		showHamburgerMenu: false,
		mainNav: [],
		featureFlags: {},
		// websocketID: uuid(),
	},

	modal: {
		visible: false,
		windows: [],
	},

	auth: {
		user: null,
	},

	config: getConfig(),

	user: {
		profile: null,
	},

	notification: {
		toast: [],
	},

	sidebar: {
		pages: [],
		transition: true,
	},

	sandbox: {
		exchangeRates: [],
	},

	websocket: {
		websocketID: uuid(),
		socket: null,
	},
};
