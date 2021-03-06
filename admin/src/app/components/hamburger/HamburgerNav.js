export default [
	{
		title: 'Dashboard',
		url: '/',
		subnav: null,
		megamenu: null,
		action: null,
		mobile: true,
		published: true,
		icon: 'home',
	},
	{
		title: 'Users',
		url: '/users',
		subnav: null,
		megamenu: null,
		action: null,
		mobile: true,
		published: true,
		icon: 'image',
	},
	{
		title: 'App Settings',
		url: null,
		subnav: [
			{
				title: 'Feature Flags',
				url: '/settings/feature-flags',
				subnav: null,
				megamenu: null,
				action: null,
			},
			{
				title: 'Constants',
				url: '/settings/constants',
				subnav: null,
				megamenu: null,
				action: null,
			},
			{
				title: 'Meta Data',
				url: '/settings/meta-data',
				subnav: null,
				megamenu: null,
				action: null,
			},
		],
		megamenu: null,
		action: null,
		mobile: true,
		published: true,
		icon: 'caret-down',
	},
	{
		title: 'Pages',
		url: null,
		subnav: [
		],
		megamenu: null,
		action: null,
		mobile: true,
		published: true,
		icon: 'caret-down',
	},
];