<template>
  
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'LOGOUT',
    data: function () {
        return {
            refresh: 0
        }
    },
    methods: {

        resetCustomerState: async function() {
            await this.$store.dispatch('customer/resetCustomerState');  
            await this.$store.dispatch('business/resetBusinessState');  
    
            this.$router.push('/')
        } 
    },
    created: async function () {
        if (process.browser) {
            this.resetCustomerState()
        }
    }
}
</script>

<style>

</style>