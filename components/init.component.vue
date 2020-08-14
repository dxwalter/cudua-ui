<template>
  
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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

				let getId = await this.GetAnonymousIdFromApi();

				if (getId.success) {
					// commit and save to local storage and store
					this.$store.commit('customer/setAnonymousId', getId.anonymousId);
					this.anonymousId = getId.GetAnonymousId.anonymousId;
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
		this.$setHTTPHeaders;

		if (process.browser) {
			this.setAnonymousId()
		}

    }
}
</script>

<style>

</style>