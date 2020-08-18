<template>
  
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'LOGOUT',
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