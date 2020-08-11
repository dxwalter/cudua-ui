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
		
		'@/assets/global-asset/global.css',
		'@/assets/business/css/app.css',
		'@/assets/customer/css/app.css'
	],
	plugins: [
		{src: '~/plugins/business/BusinessUIPlugin.client.js', ssr: false},
		{src: '~/plugins/customer/customerUIPlugin.client.js', ssr: false},
		{src: '~/plugins/utils.js', ssr: false},
		{src: '~/plugins/notification.js', ssr: false}
	],
	modules: [
		'@nuxtjs/toast',
		'@nuxtjs/pwa'
	],
	loading: false,
	pwa: {
		icon: {
			iconSrc: '/pwa/',
			iconFileName: '144.png',
			sizes: [64, 120, 144, 152, 192, 384, 512],
			targetDir: 'pwa-icons',
			accessibleIcons: true,
			iconProperty: '$icon',
			purpose: [ 'badge', 'maskable' ]
		},
		meta: {
			viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1',
			mobileApp: 'mobile-web-app-capable',
			mobileAppIOS: false,
			appleStatusBarStyle: 'default',
			name: "Cudua",
			author: "Cudua Inc.",
			description: "Cudua is an ecommerce service that allows businesses to create and manage their online stores. Customers buy products from these businesses by searching for the business using the business name or location",
			theme_color: '#ee6425',
			ogHost: "https://www.cudua.com",
			nativeUI: true,
		},
		manifest: {
			name: "Nigeria's 1st localized ecommerce service",
			lang: 'en',
			useWebmanifestExtension: false,
			display: 'standalone',
			background_color: "#ffffff",
			theme_color: '#ee6425',
		}
	}

}