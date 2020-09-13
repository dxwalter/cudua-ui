<template>
    <div>
        <div class="alert alert-danger notification-alert" v-show="status">
            <div>Your {{type}} subscription plan has expired. Your shop and products will not appear in search results and suggestions.</div>
            <nuxt-link to="/b/profile/edit?billing=true" class="btn btn-small btn-white">Go to plans & billing</nuxt-link>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';
import { DEACTIVATE_SUBSCRIPTION } from '~/graphql/business';

export default {
    name: "SUBSCRIPTION",
    components: {

    },
    data() {
        return {
            businessId:"",
            accessToken: "",
            start: "",
            end: "",
            subscriptionId: "",
            type: "",
            status: 0
        }
    },
    created () {
        if (process.client) {
            this.GetBusinessDataFromStore()
        }
    },
    methods: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails',
            'GetBusinessData': 'business/GetBusinessDetails'
        }),
        GetBusinessDataFromStore: function () {
            let businessData = this.GetBusinessData();
            this.businessId = businessData.businessId
            
            this.start = businessData.subscription.start
            this.end = businessData.subscription.end
            this.subscriptionId = businessData.subscription.id
            this.type = businessData.subscription.type

			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
        },
        checkSubscriptionStatus: async function () {
            let endTime = Date.parse(this.end);

            let now = Date.now();

            if (now > endTime) {
                this.status = 1

                let variables = {
                    businessId: this.businessId
                };

                let context = {
                    hasUpload: true,
                    headers: {
                        'accessToken': this.accessToken
                    }
                }

                let request = await this.$performGraphQlMutation(this.$apollo, DEACTIVATE_SUBSCRIPTION, variables, context);
                
            }
        },
    },
    mounted () {
        this.checkSubscriptionStatus()
    }
}
</script>

<style>

</style>