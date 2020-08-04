export default {
	head: {
		title: 'Business name',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'my website description'
			}
		],
	
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{ src: '/business.app.js', type: 'text/javascript', body: true },
		]
	},
	css: [
		'@/assets/business/css/app.css',
	],
}