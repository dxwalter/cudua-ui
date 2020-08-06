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
                
                    <div class="form-control">
                        <label for="businessType" class="form-label">Select your state</label>
                        <select name="" id="" class="input-form">
                            <option>Rivers state</option>
                            <option>Ogun state</option>
                            <option>Cross-river state</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label class="form-label">Type the name of your LGA</label>
                        <input type="text" name="" id="" class="input-form">
                    </div>
                    <div class="form-control">
                        <label class="form-label">Type the name of your community</label>
                        <input type="text" name="" id="" class="input-form">
                    </div>
                    <div class="form-control">
                        <label class="form-label">Type the name of your street</label>
                        <input type="text" name="" id="" class="input-form">
                    </div>

                    <div class="form-control">
                        <label for="businessType" class="form-label">Type at least 3 streets that are close to --Your street-- seperated by comma</label>
                        <textarea name="" id="" cols="30" rows="3" class="input-form"></textarea>
                    </div>
                    <div class="form-control">
                        <button class="btn btn-block btn-primary" type="button">Submit your location</button>
                    </div>
                
                
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-default btn-light-grey" data-dismiss="modal" data-target="addNewLocation">Close</button>
            </div>

        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>