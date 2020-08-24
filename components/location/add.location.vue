<template>
  
    <div class="modal-container" id="addNewLocation">
        <div class="modal-dialog-box">

            <div class="modal-header">
                <h4>Add your business location</h4>

                <button class="close-modal-btn" data-target="addNewLocation" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <use xlink:href="~/assets/business/image/all-svg.svg#times"></use>
                    </svg>
                </button>
            </div>
            <div class="modal-content" id="tabContent">
                    <div v-if="isLoading" class="is-loading-container">
                        <div class="is-loading-inner-container" id="loadingContainer">
                            <div class="loader-action"><span class="loader"></span></div>
                        </div>
                    </div>
                    <div class="form-control">
                        <!-- <label for="businessType" class="form-label">Select your state</label> -->
                        <select name="" class="input-form" id="locationStates" v-model="stateId">
                            <option value="" selected>Select your state</option>
                        </select>
                    </div>


                    <div class="form-control position-relative">
                        <!-- <label class="form-label">Type the name of your LGA</label> -->
                        <input type="text" name="" id="locationLga" class="input-form" @keyup="searchForLga" v-model="lgaInput" placeholder="Type the name of your LGA">
                        <div class="recent-search-list-container" id="lgaSearchSuggestion"  v-show="lgaInput">
                            <div v-for="(suggestion, index) in ListSuggestions" :key="index">
                                <div @click="setLga(suggestion.lga.name, 'lgaSearchSuggestion')" class="action-content">
                                    {{suggestion.lga.name}} <span>- {{suggestion.state.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="form-control position-relative">
                        <!-- <label class="form-label">Type the name of your community</label> -->
                        <input type="text" id="locationCommunity" class="input-form" placeholder="Type the name of your community"  @keyup="searchForCommunity" v-model="communityInput">
                        <div class="recent-search-list-container" id="communitySearchSuggestion"  v-show="communityInput">
                            <div v-for="(suggestion, index) in communitySuggestion" :key="index">
                                <div @click="setCommunity(suggestion.communityName, 'communitySearchSuggestion')" class="action-content">
                                    {{suggestion.communityName}} <span>- {{suggestion.lga.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-control">
                        <!-- <label class="form-label">Type the name of your street</label> -->
                        <input type="text" name="" id="locationStreet" class="input-form" placeholder="Type the name of your street" v-model="streetInput">
                    </div>

                    <div class="form-control" v-show="streetInput">
                        <label for="businessType" class="form-label">Type at least 3 streets that are close to <span class="street-binding">{{streetInput}}</span> seperated by comma - <span>Optional</span></label>
                        <textarea name="" id="" cols="30" rows="4" class="input-form" placeholder="Street 1, Street 2, Street 3" v-model="proximity"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button"  @click="submitLocation()" id="submitNewLocation">
                            Submit your location
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>
                
                
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-dismiss="modal" data-target="addNewLocation">Close</button>
            </div>

        </div>
    </div>

</template>

<script>
import NOTIFICATIONMODAL from '~/components/notification/notification.vue'; 
import { 
    GET_ALL_STATES, 
    FIND_LGA, FIND_COMMUNITY,
    ADD_NEW_LOCATION
} from '~/graphql/location';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "ADDLOCATION",
    components: {

    },
    data: function () {
        return {
            isLoading: 1,
            countryId: "",
            countryName: "",
            userId: "",
            error: 0,

            // suggestions
            lgaSuggestion: "",
            communitySuggestion: "",

            // input
            stateId: "",
            lgaInput: "",
            communityInput: "",
            streetInput: "",
            proximity: ""
        }
    },
    computed: {
        ListSuggestions () {
            return this.lgaSuggestion
        },
        ListCommmunitySuggestion () {
            return this.communitySuggestion
        }
    },
    methods: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails'
		}),
        getStatesInNigeria: async function () {
            let request = await this.$performGraphQlQuery(this.$apollo, GET_ALL_STATES, {}, {});

            if (request.error) {
                let loaderTarget = document.getElementById('loadingContainer');
                loaderTarget.innerHTML = '';
                loaderTarget.innerHTML = `<h3 class="error-message">${request.message}. Refresh this page and try again</h3>`
                return
            }

            let result = request.result.data.GetAllStates
            
            if (!result.success) {
                let loaderTarget = document.getElementById('loadingContainer');
                loaderTarget.innerHTML = '';
                loaderTarget.innerHTML = `<h3 class="error-message">An error occurred while getting state data</h3>`
                return
            }

            this.countryName = result.country.name
            this.countryId = result.country.countryId

            let states = result.states;

            let stateSelectForm = document.getElementById('locationStates');

            states.forEach((element, index, array) => {
                let stateId = element.stateId;
                let stateName = element.name;

                let option = document.createElement("option");
                option.innerHTML = stateName;
                option.value = stateId;

                stateSelectForm.appendChild(option);
            });

            this.isLoading = 0

        },
        searchForLga: async function () {
            if (this.stateId.length < 1) {
                this.$addRedBorder('locationStates');
                this.$showToast('Select a state', 'error');
                this.lgaInput = ""
                return
            }

            this.$removeRedBorder('locationStates')

            if (this.lgaInput.length > 2) {

                document.getElementById('lgaSearchSuggestion').style.display = "block"

                setTimeout(async () => {
                    let variables = {keyword: this.lgaInput}
                    let request = await this.$performGraphQlQuery(this.$apollo, FIND_LGA, variables, {});

                    if (!request.error) {
                        let result = request.result.data.GetLga;

                        if (result.success) {
                            if (result.lgaData != null) {
                                this.lgaSuggestion = result.lgaData
                            } else {
                                this.lgaSuggestion = ""
                                document.getElementById('lgaSearchSuggestion').style.display = "none"
                            }
                        }
                    }
                }, 2000);
            }
        },
        searchForCommunity: async function () {
            if (this.lgaInput.length < 1) {
                this.$addRedBorder('locationLga');
                this.$showToast('Type your LGA', 'error');
                this.communityInput = ""
                return
            }

            this.$removeRedBorder('locationLga')

            if (this.communityInput.length > 2) {

                document.getElementById('communitySearchSuggestion').style.display = "block"

                setTimeout(async () => {
                    let variables = {keyword: this.communityInput}
                    let request = await this.$performGraphQlQuery(this.$apollo, FIND_COMMUNITY, variables, {});

                    if (!request.error) {
                        let result = request.result.data.GetCommunity;
                        if (result.success) {
                            if (result.communityData != null) {
                                this.communitySuggestion = result.communityData
                            } else {
                                this.communitySuggestion = ""
                                document.getElementById('communitySearchSuggestion').style.display = "none"
                            }
                        }
                    }
                }, 2000);
            }
        },
        hideSuggestion: function (element) {
            let target = document.getElementById(element);
            target.style.display = 'none'; 
        },
        setLga: function (data, suggestionDiv) {
            this.lgaInput = data
            this.hideSuggestion(suggestionDiv)
        },
        setCommunity: function (data, suggestionDiv) {
            this.communityInput = data
            this.$removeRedBorder('locationCommunity')
            this.hideSuggestion(suggestionDiv)
        },
        assignData: function () {
            let customerData = this.GetCustomerData();
            this.userId = customerData.userId
        },
        submitLocation: async function () {

            let target = document.getElementById('submitNewLocation');
            this.error = 0;

            if (this.stateId.length < 1) {
                this.error = 1;
                this.$addRedBorder('locationStates')
            };

            if (this.lgaInput.length < 1) {
                this.error = 1;
                this.$addRedBorder('locationLga')
            };
            if (this.communityInput.length < 1) {
                this.error = 1;
                this.$addRedBorder('locationCommunity')
            }
            if (this.streetInput.length < 1) {
                this.error = 1;
                this.$addRedBorder('locationStreet')
            }

            if (this.error == 1) {
                this.$showToast("Fill in the needed data", 'error');
                return
            }

            target.disabled = true

            let variables = {
                userId: this.userId,
                state: this.stateId,
                lga: this.lgaInput,
                community: this.communityInput,
                street: this.streetInput,
                proximity: this.proximity
            }

            let request = await this.$performGraphQlMutation(this.$apollo, ADD_NEW_LOCATION, variables, {});

            target.disabled = false;

            if (request.error) {
                this.$showToast("A network error occurred. Check your internet connection", 'error', 4000)
                return
            }

            let result = request.result.data.AddNewUserLocation

            if (result.success) {
                this.$showToast(result.message, 'success', 4000)
            } else {
                this.$showToast(result.message, 'error', 4000)
            }

        }

    },
    created () {
        if (process.browser) {
            this.assignData()
            this.getStatesInNigeria()
        }
    },
}
</script>

<style scoped>
    .searching-indicator {
        font-size: 14px;
        padding: 8px 0px !important;
    }
    .error-message,
    h3 {
        text-align: center !important;
        font-weight: 500 !important;
    }
    .padding-0 {
        padding: 0;
        border: 0
    }

    .street-binding {
        font-weight: 500 !important;
        color: rgba(238, 100, 37, 1) !important;
    }
</style>