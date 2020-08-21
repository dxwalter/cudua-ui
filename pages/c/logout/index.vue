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

        resetCustomerState: function() {
            this.$store.dispatch('customer/resetCustomerState');  
            this.$store.dispatch('business/resetBusinessState');  
    
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