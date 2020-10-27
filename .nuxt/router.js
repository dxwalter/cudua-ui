import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b76a426 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _df0742d0 = () => interopDefault(import('..\\pages\\auth\\index.vue' /* webpackChunkName: "pages/auth/index" */))
const _3ec016b2 = () => interopDefault(import('..\\pages\\b\\index.vue' /* webpackChunkName: "pages/b/index" */))
const _4671bc11 = () => interopDefault(import('..\\pages\\c\\index.vue' /* webpackChunkName: "pages/c/index" */))
const _ab11bc38 = () => interopDefault(import('..\\pages\\p\\index.vue' /* webpackChunkName: "pages/p/index" */))
const _0a509918 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _6d849140 = () => interopDefault(import('..\\pages\\t\\index.vue' /* webpackChunkName: "pages/t/index" */))
const _b839d1c2 = () => interopDefault(import('..\\pages\\auth\\create-new-password.vue' /* webpackChunkName: "pages/auth/create-new-password" */))
const _adcbc10c = () => interopDefault(import('..\\pages\\auth\\create-store.vue' /* webpackChunkName: "pages/auth/create-store" */))
const _f668966a = () => interopDefault(import('..\\pages\\auth\\forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _69521b1e = () => interopDefault(import('..\\pages\\auth\\sign-up.vue' /* webpackChunkName: "pages/auth/sign-up" */))
const _fb4040d4 = () => interopDefault(import('..\\pages\\b\\categories\\index.vue' /* webpackChunkName: "pages/b/categories/index" */))
const _55d7868e = () => interopDefault(import('..\\pages\\b\\dashboard\\index.vue' /* webpackChunkName: "pages/b/dashboard/index" */))
const _f58b7b26 = () => interopDefault(import('..\\pages\\b\\followers\\index.vue' /* webpackChunkName: "pages/b/followers/index" */))
const _d76d16ee = () => interopDefault(import('..\\pages\\b\\invite\\index.vue' /* webpackChunkName: "pages/b/invite/index" */))
const _1f032367 = () => interopDefault(import('..\\pages\\b\\notification\\index.vue' /* webpackChunkName: "pages/b/notification/index" */))
const _974f01a6 = () => interopDefault(import('..\\pages\\b\\orders\\index.vue' /* webpackChunkName: "pages/b/orders/index" */))
const _4dc5095a = () => interopDefault(import('..\\pages\\b\\product\\index.vue' /* webpackChunkName: "pages/b/product/index" */))
const _34bd334e = () => interopDefault(import('..\\pages\\b\\profile\\index.vue' /* webpackChunkName: "pages/b/profile/index" */))
const _089bf8ca = () => interopDefault(import('..\\pages\\b\\template.vue' /* webpackChunkName: "pages/b/template" */))
const _a5fe28b4 = () => interopDefault(import('..\\pages\\b\\test-slider\\index.vue' /* webpackChunkName: "pages/b/test-slider/index" */))
const _2b5bd831 = () => interopDefault(import('..\\pages\\c\\cart\\index.vue' /* webpackChunkName: "pages/c/cart/index" */))
const _408327b2 = () => interopDefault(import('..\\pages\\c\\following\\index.vue' /* webpackChunkName: "pages/c/following/index" */))
const _8e840c72 = () => interopDefault(import('..\\pages\\c\\logout\\index.vue' /* webpackChunkName: "pages/c/logout/index" */))
const _20dc7686 = () => interopDefault(import('..\\pages\\c\\notification\\index.vue' /* webpackChunkName: "pages/c/notification/index" */))
const _c80b54e8 = () => interopDefault(import('..\\pages\\c\\orders\\index.vue' /* webpackChunkName: "pages/c/orders/index" */))
const _1b8b484c = () => interopDefault(import('..\\pages\\c\\profile\\index.vue' /* webpackChunkName: "pages/c/profile/index" */))
const _3714292e = () => interopDefault(import('..\\pages\\c\\saved-items\\index.vue' /* webpackChunkName: "pages/c/saved-items/index" */))
const _5ad49db4 = () => interopDefault(import('..\\pages\\b\\categories\\add-categories.vue' /* webpackChunkName: "pages/b/categories/add-categories" */))
const _eb2151f8 = () => interopDefault(import('..\\pages\\b\\product\\add-product.vue' /* webpackChunkName: "pages/b/product/add-product" */))
const _2619a34f = () => interopDefault(import('..\\pages\\b\\profile\\edit\\index.vue' /* webpackChunkName: "pages/b/profile/edit/index" */))
const _5f6ab410 = () => interopDefault(import('..\\pages\\c\\profile\\edit\\index.vue' /* webpackChunkName: "pages/c/profile/edit/index" */))
const _c7c9951e = () => interopDefault(import('..\\pages\\b\\product\\edit\\_id.vue' /* webpackChunkName: "pages/b/product/edit/_id" */))
const _2ceb1c6a = () => interopDefault(import('..\\pages\\b\\product\\subcategory\\_id.vue' /* webpackChunkName: "pages/b/product/subcategory/_id" */))
const _6eea1c44 = () => interopDefault(import('..\\pages\\c\\orders\\cleared\\_id.vue' /* webpackChunkName: "pages/c/orders/cleared/_id" */))
const _47c1420d = () => interopDefault(import('..\\pages\\b\\orders\\_id\\index.vue' /* webpackChunkName: "pages/b/orders/_id/index" */))
const _bb2f930a = () => interopDefault(import('..\\pages\\b\\product\\_id.vue' /* webpackChunkName: "pages/b/product/_id" */))
const _681ce1e4 = () => interopDefault(import('..\\pages\\c\\orders\\_id\\index.vue' /* webpackChunkName: "pages/c/orders/_id/index" */))
const _1dbeb9b6 = () => interopDefault(import('..\\pages\\p\\_id\\index.vue' /* webpackChunkName: "pages/p/_id/index" */))
const _1ca1d844 = () => interopDefault(import('..\\pages\\p\\_id\\review\\index.vue' /* webpackChunkName: "pages/p/_id/review/index" */))
const _4c13e940 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4f042bda = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages/_id/index" */))
const _61022202 = () => interopDefault(import('..\\pages\\_id\\review\\index.vue' /* webpackChunkName: "pages/_id/review/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _2b76a426,
    name: "404"
  }, {
    path: "/auth",
    component: _df0742d0,
    name: "auth"
  }, {
    path: "/b",
    component: _3ec016b2,
    name: "b"
  }, {
    path: "/c",
    component: _4671bc11,
    name: "c"
  }, {
    path: "/p",
    component: _ab11bc38,
    name: "p"
  }, {
    path: "/search",
    component: _0a509918,
    name: "search"
  }, {
    path: "/t",
    component: _6d849140,
    name: "t"
  }, {
    path: "/auth/create-new-password",
    component: _b839d1c2,
    name: "auth-create-new-password"
  }, {
    path: "/auth/create-store",
    component: _adcbc10c,
    name: "auth-create-store"
  }, {
    path: "/auth/forgot-password",
    component: _f668966a,
    name: "auth-forgot-password"
  }, {
    path: "/auth/sign-up",
    component: _69521b1e,
    name: "auth-sign-up"
  }, {
    path: "/b/categories",
    component: _fb4040d4,
    name: "b-categories"
  }, {
    path: "/b/dashboard",
    component: _55d7868e,
    name: "b-dashboard"
  }, {
    path: "/b/followers",
    component: _f58b7b26,
    name: "b-followers"
  }, {
    path: "/b/invite",
    component: _d76d16ee,
    name: "b-invite"
  }, {
    path: "/b/notification",
    component: _1f032367,
    name: "b-notification"
  }, {
    path: "/b/orders",
    component: _974f01a6,
    name: "b-orders"
  }, {
    path: "/b/product",
    component: _4dc5095a,
    name: "b-product"
  }, {
    path: "/b/profile",
    component: _34bd334e,
    name: "b-profile"
  }, {
    path: "/b/template",
    component: _089bf8ca,
    name: "b-template"
  }, {
    path: "/b/test-slider",
    component: _a5fe28b4,
    name: "b-test-slider"
  }, {
    path: "/c/cart",
    component: _2b5bd831,
    name: "c-cart"
  }, {
    path: "/c/following",
    component: _408327b2,
    name: "c-following"
  }, {
    path: "/c/logout",
    component: _8e840c72,
    name: "c-logout"
  }, {
    path: "/c/notification",
    component: _20dc7686,
    name: "c-notification"
  }, {
    path: "/c/orders",
    component: _c80b54e8,
    name: "c-orders"
  }, {
    path: "/c/profile",
    component: _1b8b484c,
    name: "c-profile"
  }, {
    path: "/c/saved-items",
    component: _3714292e,
    name: "c-saved-items"
  }, {
    path: "/b/categories/add-categories",
    component: _5ad49db4,
    name: "b-categories-add-categories"
  }, {
    path: "/b/product/add-product",
    component: _eb2151f8,
    name: "b-product-add-product"
  }, {
    path: "/b/profile/edit",
    component: _2619a34f,
    name: "b-profile-edit"
  }, {
    path: "/c/profile/edit",
    component: _5f6ab410,
    name: "c-profile-edit"
  }, {
    path: "/b/product/edit/:id?",
    component: _c7c9951e,
    name: "b-product-edit-id"
  }, {
    path: "/b/product/subcategory/:id?",
    component: _2ceb1c6a,
    name: "b-product-subcategory-id"
  }, {
    path: "/c/orders/cleared/:id?",
    component: _6eea1c44,
    name: "c-orders-cleared-id"
  }, {
    path: "/b/orders/:id",
    component: _47c1420d,
    name: "b-orders-id"
  }, {
    path: "/b/product/:id",
    component: _bb2f930a,
    name: "b-product-id"
  }, {
    path: "/c/orders/:id",
    component: _681ce1e4,
    name: "c-orders-id"
  }, {
    path: "/p/:id",
    component: _1dbeb9b6,
    name: "p-id"
  }, {
    path: "/p/:id/review",
    component: _1ca1d844,
    name: "p-id-review"
  }, {
    path: "/",
    component: _4c13e940,
    name: "index"
  }, {
    path: "/:id",
    component: _4f042bda,
    name: "id"
  }, {
    path: "/:id/review",
    component: _61022202,
    name: "id-review"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
