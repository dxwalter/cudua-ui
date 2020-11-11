<template>
  <div class="modal-container" id="createCategoryModal">
        <div class="modal-dialog-box">

            <div class="modal-tab-menu" id="tabList">
                <a href="#" class="tab-link is-active" id="tabLink" data-tab="createCategory">Create category</a>
                <a href="#" class="tab-link" id="tabLink" data-tab="createSubCategory">Create subcategory</a>
            </div>

            <div class="modal-content" id="tabContent">
                <div id="createCategory" class="is-active tab-content-area">
                    <div class="form-control">
                        <label for="businessType" class="form-label">Type the name of the category</label>
                        <input type="text" name="" id="newCategoryName" class="input-form" v-model="newCategoryName" placeholder="Bags">
                    </div>
                    <div class="form-control">
                        <label for="businessType" class="form-label">Add one or multiple subcategories seperated by comma</label>
                        <textarea name="" id="newCategorySubcategories" cols="30" rows="5" class="input-form" v-model="newCategorySubcategories" placeholder="Purse, Hand bags,..."></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button" @click="submitNewCategory()" id="submitNewCategory">
                            Submit category
                            <div class="loader-action"><span class="loader"></span></div>
                        </button>
                    </div>
                </div>
                <div id="createSubCategory" class="tab-content-area">
                    <div class="form-control">
                        <select class="input-form" id="newSubcategoryCategoryId"  @change="onSelectCategory($event)">
                            <option selected>Select a product category</option>
                            <option 
                                v-for="category in returnCategories" 
                                v-bind:value="category.categoryId" 
                                :key="category.categoryId"
                            >
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="businessType" class="form-label" id="">Add at least one or multiple subcategories seperated by comma</label>
                        <textarea name="" cols="30" rows="5" class="input-form" placeholder="" id="newSubcategoryListing" v-model="newSubcategoryListing"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button" @click="submitNewSubcategory()" id="submitNewSubcategory">
                            Submit subcategory
                            <div class="loader-action"><span class="loader"></span></div>    
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-dismiss="modal" data-target="createCategoryModal">Close</button>
            </div>

        </div>
    </div>
</template>

<script>

import { CREATE_NEW_CATEGORIES, CREATE_NEW_SUBCATEGORIES } from '~/graphql/categories';
import {mapGetters} from 'vuex';

export default {
    name: "CREATECATEGORYANDSUBCATEGORY",
    data: function () {
        return {
            allCategories: "",
            newCategoryName: "",
            newCategorySubcategories: "",
            error: 0,
            accessToken: "",

            // create subcategory
            newSubcategoryListing: "",
            newSubcategoryCategoryId: "",
        }
    },
    computed: {
        returnCategories () {
            return this.allCategories
        }
    },
    methods: {
        ...mapGetters({
            'GetCustomerData': 'customer/GetCustomerDetails'
        }),
        GetBusinessDataFromStore: function () {
			let customerData = this.GetCustomerData();
            this.accessToken = customerData.userToken
		},
        submitNewCategory: async function () {
            this.error = 0;

            if (this.newCategoryName.length < 3) {
                this.$addRedBorder('newCategoryName');
                this.error = 1
            } else {
                this.$removeRedBorder('newCategoryName')
            }

            if (this.newCategorySubcategories.length < 3) {
                this.$addRedBorder('newCategorySubcategories');
                this.error = 1
            } else {
                this.$removeRedBorder('newCategorySubcategories')
            }

            if (this.error == 1) {
                this.$showToast("Fill in the blank forms", 'error')
                return
            }


            let target = document.getElementById('submitNewCategory');
            target.disabled = true;

            let variables = {
                categoryName: this.newCategoryName,
                subcategories: this.newCategorySubcategories
            }

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let query = await this.$performGraphQlMutation(this.$apollo, CREATE_NEW_CATEGORIES, variables, context);
            target.disabled = false

            if (query.error) {
                this.$showToast(query.message, 'error', 3000)
                return
            }

            let result = query.result.data.createCategory;

            if (!result.success) {
                this.$showToast(result.message, 'error', 3000)
                return
            }

            this.$showToast(result.message, 'success', 6000)

        },
        onSelectCategory: function(e) {
            let selectedCategory = e.target.options
            if (selectedCategory.selectedIndex > -1) {
                let selectedIndex = e.target.options[e.target.options.selectedIndex];
                this.newSubcategoryCategoryId = selectedIndex.value;
            }
        },
        submitNewSubcategory: async function () {
            
            this.error = 0;

            if (this.newSubcategoryCategoryId.length < 2) {
                this.$addRedBorder('newSubcategoryCategoryId');
                this.error = 1
            } else {
                this.$removeRedBorder('newSubcategoryCategoryId');
                this.error = 0;
            }

            if (this.newSubcategoryListing.length < 3) {
                this.$addRedBorder('newSubcategoryListing');
                this.error = 1
            } else {
                this.$removeRedBorder('newSubcategoryListing');
                this.error = 0;
            }

            if (this.error == 1) {
                this.$showToast("Fill in the blank forms", 'error')
                return
            }

            let target = document.getElementById('submitNewSubcategory');
            target.disabled = true;

            let variables = {
                subcategories: this.newSubcategoryListing,
                categoryId: this.newSubcategoryCategoryId
            }

			let context = {
                headers: {
                    'accessToken': this.accessToken
                }
            }
            
            let query = await this.$performGraphQlMutation(this.$apollo, CREATE_NEW_SUBCATEGORIES, variables, context);
            target.disabled = false

            if (query.error) {
                this.$showToast(query.message, 'error', 3000)
                return
            }

            let result = query.result.data.createSubCategory;

            if (!result.success) {
                this.$showToast(result.message, 'error', 3000)
                return
            }

            this.$showToast(result.message, 'success', 6000)




        }
    },
    created() {
        if (process.browser) {
            this.GetBusinessDataFromStore()
            this.$nuxt.$on('categoryListing', (data) => {
                this.allCategories = data
            })
        }
    }

}
</script>

<style  scoped>

</style>