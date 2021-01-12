export default {
	dev: process.env.NODE_ENV !== 'production',
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,900&display=swap'
			}
		],
	},
	css: [
		'@/assets/business/css/app.css',
		'@/assets/customer/css/app.css',
		'@/assets/global-asset/advert.css',
		'@/assets/global-asset/global.css',
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
		{ src: '~/plugins/scroll-to-top.client.vue', ssr: false },
		{ src: '~/plugins/pwa/custom-service-worker.js', ssr: false },
		{ src: '~/plugins/ga.client.js', ssr: false },
		{ src: '~/plugins/blogEditor.js', ssr: false }
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
		autoRegister: true,
		init: {
		  appId: '4077e6c3-299e-4bef-8fcd-7eeec9e2b284',
		  allowLocalhostAsSecureOrigin: true,
		  welcomeNotification: {
			"title": "Welcome to Cudua!",
			"message": "You look cute. We just want to take it a little bit further"
		  }
		},
		importScripts: ["/custom-sw.js"]
	},
	pwa: {
		icon: {
			
		},
		meta: {
			viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1',
			mobileApp: 'mobile-web-app-capable',
			mobileAppIOS: false,
			appleStatusBarStyle: 'default',
			name: "Cudua",
			author: "Cudua Inc.",
			description: "The online market for Cudua is an ecommerce service that allows fashion and beauty businesses to create and manage their online shops. Customers buy products from these businesses by searching for the business using the business name or location",
			theme_color: '#ee6425',
			ogHost: "https://cudua.com",
			nativeUI: true,
		},
		manifest: {
			name: "The online market for lovely people",
			lang: 'en',
			useWebmanifestExtension: false,
			short_name: "Cudua",
			display: 'standalone',
			background_color: "#fff",
			theme_color: '#fff',
		},
		workbox: {
			/* workbox options */
			workboxURL: 'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
			importScripts: [
				'/custom-sw.js'
			],
			swURL: '/custom-sw.js',
			offlineAnalytics: true,
			autoRegister: false,
			offlinePage: '/offline.html',
			runtimeCaching: [
				{
					urlPattern: 'https://fonts.googleapis.com/.*',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {
						cacheName: 'cudua-commerce-cache',
						cacheableResponse: {statuses: [0, 200]}
					},
					strategyPlugins: [{
						use: 'Expiration',
						config: {
						maxEntries: 10,
						maxAgeSeconds: 300
						}
					}]
				},
				{
					urlPattern: 'https://fonts.gstatic.com/.*',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {cacheableResponse: {statuses: [0, 200]}, cacheName: 'cudua-commerce-cache',},
					strategyPlugins: [{
						use: 'Expiration',
						config: {
						maxEntries: 10,
						maxAgeSeconds: 300
						}
					}]
				},
			]
		}
	},
	auth: {
		strategies: {
			facebook: {
				client_id: '405350337318190',
				userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
				scope: ['public_profile', 'email', 'name']
			},
		}
	},
	buildModules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/auth',
		'@nuxtjs/vuetify'
	],
	build: {
		transpile: ['vuetify/lib', "tiptap-vuetify"]
	},
	apollo: {
		clientConfigs: {
			default: '~/apollo/client-configs/default.js',
		}
	},
	env: {
		API_END_POINT: process.env.API_END_POINT,
		CLOUDINARY_FOLDER:process.env.CLOUDINARY_FOLDER
	},
	server: {
		port: 3333, // default: 3000
		host: '0.0.0.0' // default: localhost
	}

}