<template>
  <div class="customer">
      <div class="body-container grey-bg-color full-height-vh">

            <div class="nav-container">
                <MOBILESEARCH></MOBILESEARCH>
                <DESKTOPNAVGATION></DESKTOPNAVGATION>
                <MOBILENAVIGATION></MOBILENAVIGATION>
            </div>

            <div class="content-container">
        
            <div class="product-upload-container">
                            <!-- main content goes in here -->

                <div class="upload-tab-area" id="tabList">
                    <a href="javascript:void()" class="chip-tab-item" id="tabLink" data-tab="basicInfo">Create contact</a>
                    <a href="javascript:void()" class="chip-tab-item" id="tabLink" data-tab="viewSubCat">View data</a>
                </div>

                <div class="upload-tab-content" id="tabContent">
                    <div class="is-active tab-content-area" id="basicInfo">
                        <h3 class="header">Add phone numbers ({{countData}})</h3>
                        <form action="" method="post">
                            <div class="form-control">
                                <select class="input-form white-bg-color" name="businessType" required v-model="type">
                                    <option value="" selected="">Business type</option>
                                    <option value="Beauty">Beauty</option>
                                    <option value="Fashion">Fashion</option>
                                </select>
                            </div>
                            <div class="form-control">
                                <input type="text" name="businessname" class="input-form white-bg-color" placeholder="Business name" required v-model="name">
                            </div>
                            <div class="form-control">
                                <input type="text" name="businesslocation" class="input-form white-bg-color" placeholder="Business Location" value="" required autocomplete="off" v-model="location">
                            </div>
                            <div class="form-control">
                                <input type="number" name="phone_one" class="input-form white-bg-color" placeholder="Phone 1" required  autocomplete="off" v-model="phoneOne">
                            </div>
                            <div class="form-control">
                                <input type="number" name="phone_two" class="input-form white-bg-color" placeholder="phone 2" v-model="phoneTwo">
                            </div>
                            <div class="form-control">
                                <button class="btn btn-primary btn-block" id="submitData" type="button" @click="submitData($event)">Submit Contact
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </form>
                    </div> 

                    <!-- add more details area -->
                    <div class="tab-content-area " id="moreInfo">
                        <h3>Add subcategory</h3>
                        <form action="index.php?tab=subcategory" method="post">
                            <div class="form-control">
                                <label for="businessType" class="form-label">Choose a category</label>
                                <select class="input-form white-bg-color" name="createSubCatCatId">
                                                                </select>
                            </div>

                            <div class="form-control">
                                <label for="businessType" class="form-label">Enter one or more subcategories seperated by comma</label>
                                <textarea name="subcatData" id="" cols="30" rows="10" class="input-form white-bg-color"></textarea>
                            </div>
                            <div class="form-control">
                                <button class="btn btn-primary btn-block" type="submit" name="">Submit contact
                                    <div class="loader-action"><span class="loader"></span></div>
                                </button>
                            </div>
                        </form>
                    </div>


                    <div class="tab-content-area" id="viewSubCat">
                        <h3>View subcategories</h3>
                        <div class="form-control mg-bottom-24">
                            <label for="businessType" class="form-label">Choose a category</label>
                            <select class="input-form white-bg-color" id="ChooseCategory">
                                                        </select>
                        </div>

                        <div class="chip-container" id="chipContainer">
                        </div>

                    </div>

                </div>

                </div>

            </div>
      </div>
  </div>
</template>

<script>
import { CREATE_CONTACT } from '~/graphql/cuduaCustomer.js'
import MOBILENAVIGATION from '~/layouts/customer/mobile-navigation.vue'
import DESKTOPNAVGATION from '~/layouts/customer/desktop-navigation.vue'
import MOBILESEARCH from '~/layouts/customer/mobile-search.vue'
export default {
    name: "CUDUACONTACT",
    components: {
        MOBILENAVIGATION, DESKTOPNAVGATION, MOBILESEARCH
    },
    data() {
        return {
            type: "",
            name: "",
            phoneOne: "",
            phoneTwo: "",
            location: "",
            countData: 0
        }
    },
    methods: {
        submitData: async function (e) {
            e.preventDefault();
            let target = document.getElementById('submitData');
            let variables = {
                name: this.name,
                location: this.location,
                type: this.type,
                phone_one: this.phoneOne,
                phone_two: this.phoneTwo
            }

            target.disabled = true

            let request = await this.$performGraphQlMutation(this.$apollo, CREATE_CONTACT, variables, {});
            
            target.disabled = false

            if (request.error) {
                this.$initiateNotification('error', "Network Error", request.message)
                return
            }

            let result = request.result.data.createIdealCustomer;

            if (!result.success) {
                this.$initiateNotification('error', "Network Error", result.message)
                return
            }

            this.$initiateNotification('success', "", result.message);

            this.name = "";
            this.phoneOne = ""
            this.type = ""
            this.phoneTwo = ""
            this.countData = result.countData

        }
    }
}
</script>

<style scoped>
    .full-height-vh {
        min-height: 100vh;
    }
    .product-upload-container {
        padding-top: 32px;
    }
    @media(min-width: 599px) {
        .product-upload-container {
            width: 400px;
            margin: 0 auto
        }
    }
    .header {
        margin: 32px 0px;
    }
</style>