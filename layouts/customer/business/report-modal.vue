<template>
  <div class="modal-container" id="reportModal">
<div class="modal-dialog-box">

	<div class="modal-header">
		<h4>Report this business</h4>

		<button class="close-modal-btn" data-target="reportModal" data-dismiss="modal">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
				<use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
			</svg>
		</button>
	</div>

	<div class="modal-content">
		<div id="createCategory" class="is-active tab-content-area">
			<div class="form-control">
				<!-- <label for="businessType" class="form-label">Subject of report</label> -->
				<input type="text" name="" id="reportSubject" class="input-form" placeholder="Subject of report">
			</div>
			<div class="form-control">
				<!-- <label for="businessType" class="form-label">Type your report</label> -->
				<textarea name="" cols="30" rows="5" class="input-form" placeholder="Type your report" id="reportBody"></textarea>
			</div>
			<!-- <div class="form-control">
				<button class="btn btn-white btn-small">Add a photo</button>
			</div> -->
			<div class="form-control">
				<button class="btn btn-block btn-primary" type="button">Submit report</button>
			</div>
		</div>
	</div>
	
	<div class="modal-footer" data-target="reportModal" data-dismiss="modal">
		<button class="btn btn-default btn-light-grey">Close</button>
	</div>

</div>
</div>
</template>

<script>
export default {
	name: "REPORTBUSINESSMODAL",
	data() {
		return {
			businessId: "",
			businessName: "",
			logo: ""
		}
	},
	created() {
		if (process.browser) {
			this.$nuxt.$on('searchData', (data) => {
				this.businessName = data.name
				this.businessId = data.id
				this.logo = data.logo
			})
		}
	}
}
</script>

<style>

</style>