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
                        <input type="text" name="" id="" class="input-form">
                    </div>
                    <div class="form-control">
                        <label for="businessType" class="form-label">Add at least one or multiple subcategories seperated by comma</label>
                        <textarea name="" id="" cols="30" rows="5" class="input-form"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button">Submit category</button>
                    </div>
                </div>
                <div id="createSubCategory" class="tab-content-area">
                    <div class="form-control">
                        <label for="businessType" class="form-label">Type the name of the category</label>
                        <select class="input-form">
                            <option value="" selected="">Select a category</option>
                            <option value="">category 1</option>
                            <option value="">category 2</option>
                            <option value="">category 3</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="businessType" class="form-label">Add at least one or multiple subcategories seperated by comma</label>
                        <textarea name="" id="" cols="30" rows="5" class="input-form"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button">Submit subcategory</button>
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
export default {

}
</script>

<style src="~/assets/business/css/app.css" scoped>

</style>