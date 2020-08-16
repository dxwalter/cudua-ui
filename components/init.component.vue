<template>
  
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { GET_ANONYMOUS_ID } from '~/graphql/customer';

export default {
    name: 'INITCOMPONENT',
        data: function() {
      return {
        anonymousId: ""
      }
    },
    computed: {
	  ...mapGetters({'GetAnonymousId': 'customer/GetAnonymousId'})
    },
    methods: {
		...mapActions({
			'GetAnonymousIdFromApi': 'customer/GetAnonymousIdFromApi'
		}),
		setAnonymousId: async function () {

			let getAnonymousIdFromStorage = localStorage.getItem('CUDUA_ANONYMOUS_ID');	

			if (getAnonymousIdFromStorage == undefined || getAnonymousIdFromStorage.length < 1) {

				let getId = await this.$apollo.query({
					query: GET_ANONYMOUS_ID
				})

				let result = getId.data.GetAnonymousId;
				if (result.success) {
					// commit and save to local storage and store
					this.$store.commit('customer/setAnonymousId', result.anonymousId);
					this.anonymousId = result.anonymousId;
					localStorage.setItem('CUDUA_ANONYMOUS_ID', this.anonymousId)

				} else {
					this.$initiateNotification('error', "Network error", getId.message);
				}

			} else {
				this.anonymousId = getAnonymousIdFromStorage;
				this.$store.commit('customer/setAnonymousId', this.anonymousId);
			}
		}
	},
    created: async function () {

		if (process.browser) {
			this.$setHTTPHeaders;
			this.setAnonymousId()
		}

    }
}
</script>

<style>

</style>