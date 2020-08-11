<template>
  <div class="modal-container" id="contactBusiness">
  <div class="modal-dialog-box">

      <div class="modal-header">
          <h4>Contact this [[Business name here]]</h4>

          <button class="close-modal-btn" data-target="contactBusiness" data-dismiss="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
              </svg>
          </button>
      </div>

      <div class="modal-content">
        <div id="createCategory" class="">
            <div class="business-contact">
				<div class="contact-details d-flex-between">
					<span>08104685729</span>
					<a href="#" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="margin-unset">
							<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
						</svg>
					</a>
				</div>
				<div class="contact-details d-flex-between">
					<span>08104685729</span>
					<a href="#" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="margin-unset">
							<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
						</svg>
					</a>
				</div>
				<div class="contact-details d-flex-between">
					<span>theceoforlife@gmail.com</span>
					<a href="#" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="margin-unset">
							<use xlink:href="~/assets/customer/image/all-svg.svg#email"></use>
						</svg>
					</a>
				</div>
			</div>
        </div>
      </div>
      
      <div class="modal-footer border-unset">
          <button data-target="contactBusiness" data-dismiss="modal" class="btn btn-default btn-light-grey btn-block">Close</button>
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