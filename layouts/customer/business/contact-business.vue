<template>
  <div class="modal-container" id="contactBusiness">
  <div class="modal-dialog-box">

      <div class="modal-header">
          <h4>Contact {{businessName}}</h4>

          <button class="close-modal-btn" data-target="contactBusiness" data-dismiss="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <use xlink:href="~/assets/customer/image/all-svg.svg#times"></use>
              </svg>
          </button>
      </div>

      <div class="modal-content">
        <div id="createCategory" class="">
            <div class="business-contact">
				<div class="alert alert-info" v-show="getPhoneNumber.length == 0 && getEmail == undefined">
					No contact info has been added by this business
				</div>
				<div class="contact-details d-flex-between-move" v-for="(x, index) in getPhoneNumber" :key="index">
					<span>{{x}}</span>
					<a :href="`tel: ${x}`" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
							<use xlink:href="~/assets/customer/image/all-svg.svg#phone"></use>
						</svg>
					</a>
				</div>
				<div class="contact-details d-flex-between-move" v-show="whatsappNumber">
					<span>{{whatsappNumber}}</span>
					<a :href="`https://wa.me/${whatsappNumber}?text=Hello`" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<use xlink:href="~/assets/customer/image/all-svg.svg#whatsappIcon"></use>
						</svg>
					</a>
				</div>
				<div class="contact-details d-flex-between-move" v-show="getEmail !== undefined">
					<span>{{getEmail}}</span>
					<a :href="`mailto: ${getEmail}`" class="close-modal-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
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
	name: "BUSINESSCONTACTMODAL",
	data() {
		return {
			businessName: "",
			contact: "",
			whatsappNumber: ""
		}
	},
	computed: {
		getEmail: function() {
			return this.contact.email
		},
		getPhoneNumber: function() {
			if (this.contact.phone == undefined || this.contact.phone.length == 0){
				 return []
			}
			let newPhoneArray = []
			
			if (this.contact.whatsapp.status == 1) {
				if (this.contact.whatsapp.number != null) newPhoneArray.push(this.contact.whatsapp.number)
				this.whatsappNumber = this.contact.whatsapp.number
			}

			for (let x of this.contact.phone) {
				newPhoneArray.push(x)
			}

			let newArray = new Set(newPhoneArray);

            let finalArray = [];

            for (const [index, x] of newArray.entries()) {
                finalArray.push(x)
            }

			return finalArray

		}
	},
	created() {
        if (process.browser) {
            this.$nuxt.$on('BusinessDetails', (data) => {
				this.businessName = data.name
				this.contact = data.contact
            })
        }
	}
}
</script>

<style scoped>
	.d-flex-between-move {
		justify-content: space-between;
		display: flex;
	}
	.close-modal-btn svg {
		width: 18px;
		height: 18px;
	}
</style>