import Vue from 'vue'

import { getMatchedComponentsInstances, getChildrenComponentInstancesUsingFetch, promisify, globalHandleError, urlJoin, sanitizeComponent } from './utils'

import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '..\\assets\\global-asset\\global.css'

import '..\\assets\\business\\css\\app.css'

import '..\\assets\\customer\\css\\app.css'

import _729ef87a from '..\\layouts\\business\\bottom-nav.vue'
import _78527a54 from '..\\layouts\\business\\side-bar.vue'
import _5dfcb1f6 from '..\\layouts\\business\\top-navigation.vue'
import _006319f9 from '..\\layouts\\customer\\business\\about-modal.vue'
import _2c0e298a from '..\\layouts\\customer\\business\\business-nav.vue'
import _1eac2771 from '..\\layouts\\customer\\business\\business-review-modal.vue'
import _697f99c1 from '..\\layouts\\customer\\business\\business-search-modal.vue'
import _4905d4c1 from '..\\layouts\\customer\\business\\contact-business.vue'
import _36f3d8c8 from '..\\layouts\\customer\\business\\report-modal.vue'
import _7dd3f9a2 from '..\\layouts\\customer\\buttom-ads.vue'
import _393ea34c from '..\\layouts\\customer\\cart\\checkout.vue'
import _01449d6d from '..\\layouts\\customer\\cart\\confirm-order.vue'
import _207823b1 from '..\\layouts\\customer\\cart\\edit-cart-item.vue'
import _3e56f42f from '..\\layouts\\customer\\customer-footer.vue'
import _382da080 from '..\\layouts\\customer\\desktop-navigation.vue'
import _192d78a4 from '..\\layouts\\customer\\mobile-navigation.vue'
import _4480c790 from '..\\layouts\\customer\\mobile-search.vue'
import _6f6c098b from './layouts/default.vue'

const layouts = { "_business/bottom-nav": sanitizeComponent(_729ef87a),"_business/side-bar": sanitizeComponent(_78527a54),"_business/top-navigation": sanitizeComponent(_5dfcb1f6),"_customer/business/about-modal": sanitizeComponent(_006319f9),"_customer/business/business-nav": sanitizeComponent(_2c0e298a),"_customer/business/business-review-modal": sanitizeComponent(_1eac2771),"_customer/business/business-search-modal": sanitizeComponent(_697f99c1),"_customer/business/contact-business": sanitizeComponent(_4905d4c1),"_customer/business/report-modal": sanitizeComponent(_36f3d8c8),"_customer/buttom-ads": sanitizeComponent(_7dd3f9a2),"_customer/cart/checkout": sanitizeComponent(_393ea34c),"_customer/cart/confirm-order": sanitizeComponent(_01449d6d),"_customer/cart/edit-cart-item": sanitizeComponent(_207823b1),"_customer/customer-footer": sanitizeComponent(_3e56f42f),"_customer/desktop-navigation": sanitizeComponent(_382da080),"_customer/mobile-navigation": sanitizeComponent(_192d78a4),"_customer/mobile-search": sanitizeComponent(_4480c790),"_default": sanitizeComponent(_6f6c098b) }

export default {
  render (h, props) {
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [

      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: '',

    nbFetching: 0
    }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  computed: {
    isOffline () {
      return !this.isOnline
    },

    isFetching () {
      return this.nbFetching > 0
    },
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }

      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$fetch) {
          p.push(page.$fetch())
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch())
          }
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        globalHandleError(error)
        this.error(error)
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    },
  },
}
