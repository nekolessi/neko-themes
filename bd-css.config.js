/** @type {import('bd-css/lib/config').Config} */
export default {
	meta: {
		name: 'Horizontal Server List',
		author: 'nekolessi',
		version: '1.0.0',
		description: 'Moves the server list from the left to the top of Discord.',
		source: 'https://github.com/nekolessi/neko-themes',
	},
	static: true,
	github: {
		profile: 'nekolessi',
		repo: 'neko-themes',
	},
	addons: [{ target: 'src/addons/bottomhsl.css' }],
};
