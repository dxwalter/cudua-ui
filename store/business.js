export const state = () => ({
	business_id: "",
	businessname: "",
	username: "",
	logo: "",
	coverPhoto: "",
	description: "",
	address: {
        number: "",
        street: "",
        community: "",
        lga: "",
        state: "",
        country: "",
	},
	contact: {
		email: "",
		phone: "",
		whatsapp: {
			status: "",
			number: ""
		}
	},
	businessCategories: [{
		itemId: "",
		categoryId: "",
		categoryName: "",
		hide: "",
		subcategories: {
			itemId: "",
			subcategoryId: "",
			subcategoryName: "",
			hide: ""
		}
	}]
});


export const actions = {}

export const getters = {}

export const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}