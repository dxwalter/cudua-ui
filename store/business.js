export const state = () => ({
	businessId: "",
	businessName: "",
	username: "",
	logo: "",
	coverPhoto: "",
	description: "",
	reviewScore: "",
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
		phone: [],
		whatsapp: {
			status: "",
			phone: ""
		}
	},
	businessCategories: []
});

const getDefaultState = () => {
	return {
		businessId: "",
		businessName: "",
		username: "",
		logo: "",
		coverPhoto: "",
		description: "",
		reviewScore: "",
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
			phone: [],
			whatsapp: {
				status: "",
				phone: ""
			}
		},
		businessCategories: []
	}
}


export const actions = {
	resetBusinessState (context, state) { context.commit('resetBusinessState', state) },
	setBusinessData (context, payload) { context.commit("setBusinessData", payload) },
	setBusinessContact (context, payload) { context.commit("setBusinessContact", payload) },
	setBusinessAddress (context, payload) { context.commit("setBusinessAddress", payload) },
	setBusinessCategories (context, payload) { context.commit("setBusinessCategories", payload) },
}

export const getters = {
	GetBusinessStatus: state => state.businessId,
	GetBusinessDetails: state => state
}

export const mutations = {
	setBusinessData: (state, dataObject) => {
		if (dataObject.businessId != undefined) state.businessId = dataObject.businessId
		if (dataObject.businessName != undefined) state.businessName = dataObject.businessName
		if (dataObject.username != undefined) state.username = dataObject.username
		if (dataObject.logo != undefined) state.logo = dataObject.logo
		if (dataObject.coverPhoto != undefined) state.coverPhoto = dataObject.coverPhoto
		if (dataObject.description != undefined) state.description = dataObject.description
		if (dataObject.reviewScore != undefined) state.reviewScore = dataObject.reviewScore
	},
	setBusinessAddress: (state, dataObject) => {
		if (dataObject.number != undefined) state.address.number = dataObject.number
		if (dataObject.street != undefined) state.address.street = dataObject.street
		if (dataObject.community != undefined) state.address.community = dataObject.community
		if (dataObject.lga != undefined) state.address.lga = dataObject.lga
		if (dataObject.state != undefined) state.address.state = dataObject.state
		if (dataObject.country != undefined) state.address.country = dataObject.country
	},
	setBusinessContact: (state, dataObject) => {
		if (dataObject.email != undefined) state.contact.email = dataObject.email
		if (dataObject.phone.length > 0) {
			
			dataObject.phone.forEach(element => {
				state.contact.phone.push(element.trim())
			});
		}
		
		if (dataObject.whatsapp.phone != undefined) {
			state.contact.whatsapp.phone = dataObject.whatsapp.phone.trim()
			state.contact.whatsapp.status = dataObject.whatsapp.status
		}
	},
	setBusinessCategories: (state, dataObject) => {
		if (dataObject.length > 0) {

			for (const [index, data] of dataObject.entries()) {
				state.businessCategories[index] = {
					categoryId: data.categoryId,
					categoryName: data.categoryName,
					hide: data.hide,
					itemId: data.itemId,
					subcategories: []
				};

				for (let subcategoryData of data.subcategories) {
					state.businessCategories[index].subcategories.push({
						hide: subcategoryData.hide,
						itemId: subcategoryData.itemId,
						subcategoryId: subcategoryData.subcategoryId,
						subcategoryName: subcategoryData.subcategoryName,
					});				
				}

			}
		}
	},
	resetBusinessState: (state) => Object.assign(state, getDefaultState())
}

export default {
    state,
    getters,
    actions,
    mutations
}