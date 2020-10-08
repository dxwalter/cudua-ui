export default {
	mode: "universal",
	head: {
		title: 'Welcome to Cudua. Create your online shop and start selling in 2 minutes',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1' },
			{
				hid: 'Cudua_description',
				name: 'description',
				content: 'Cudua is an ecommerce service that allows businesses to create and manage their online shops. Customers buy products from these businesses by searching for the business using the business name or location'
			},
			{
				hid:'og:image',
				name: 'og:image',
				content: 'https://res.cloudinary.com/cudua-images/image/upload/v1600784939/cudua_asset/icon-colored-png_qkocfy.png'
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
		{src: '~/plugins/utils.js', ssr: true},
		{src: '~/plugins/apollo.js', ssr: true},
		{src: '~/plugins/notification.client.js', ssr: false},
		{ src: '~/plugins/localStorage.js', ssr: false },
		{ src: '~/plugins/globalUI.client.js', ssr: false },
		{ src: '~/plugins/imagePlugin.js', ssr: true },
		{ src: '~/plugins/vue-paystack.client.vue', ssr: false },
		{ src: '~/plugins/vue-star-rating.client.vue', ssr: false },
	],
	modules: [
		'@nuxtjs/toast',
		'@nuxtjs/onesignal',
		'@nuxtjs/pwa',
		'@nuxtjs/apollo',
		['nuxt-lazy-load', {
			defaultImage: '/images/image-loader.png',
			observerConfig: {
				// See IntersectionObserver documentation
			}
		}]
	],
	loading: false,
	oneSignal: {
		init: {
		  appId: '9210ca94-b19b-4bda-8379-03c07765eabf',
		  allowLocalhostAsSecureOrigin: true,
		  welcomeNotification: {
			  disable: true
		  }
		},
		cdn: true,
		// Use any custom URL
		OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
	},
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
			description: "Cudua is an ecommerce service that allows businesses to create and manage their online shops. Customers buy products from these businesses by searching for the business using the business name or location",
			theme_color: '#ee6425',
			ogHost: "https://cudua.com",
			nativeUI: true,
		},
		manifest: {
			name: "Nigeria's 1st localized ecommerce service",
			lang: 'en',
			useWebmanifestExtension: false,
			display: 'standalone',
			background_color: "#ffffff",
			theme_color: '#ee6425',
		},
		workbox: {
			/* workbox options */
			workboxURL: 'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
			offlineAnalytics: true,
			offlinePage: '/offline.html'
		}
	},
	apollo: {
		clientConfigs: {
			default: '~/apollo/client-configs/default.js',
		}
	}

}