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
	},
	css: [
		'@/assets/business/css/app.css',
	],
	plugins: [
		{src: '~/plugins/business/BusinessUIPlugin.client.js', ssr: false},
		{src: '~/plugins/notification.js', ssr: false}
	],
	modules: [
		'@nuxtjs/toast',
	],
	loading: false
}