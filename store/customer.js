const state = () => ({
    userToken: "",
    fullname: "",
    email: "",
    phone: "",
    userId: "",
    displayPicture: "",
    reviewScore: "",
    review: [],
    address: {
        number: "",
        street: "",
        community: "",
        lga: "",
        state: "",
        country: "",
        busStop: "",
    },
    anonymousId: "",
    isLoggedIn: false

});

const actions = {
    async GetAnonymousIdFromApi({$graphql, params}) {
   
    }
}


const getters = {
    GetAnonymousId: state => state.anonymousId,
    GetLoginStatus: state => state.isLoggedIn,
    GetCustomerDetails: state => state
 }


const mutations = {
    setAnonymousId: (state, id) => { state.anonymousId = id},
    changeLoginStatus: (state, status) => { state.isLoggedIn = status },
    setCustomerData: (state, dataObject) => {
        if (dataObject.fullname != undefined) state.fullname = dataObject.fullname
        if (dataObject.email != undefined) state.email = dataObject.email
        if (dataObject.userId != undefined) state.userId = dataObject.userId
        if (dataObject.userToken != undefined) state.userToken = dataObject.userToken
        if (dataObject.phone != undefined) state.phone = dataObject.phone
        if (dataObject.displayPicture != undefined) state.displayPicture = dataObject.displayPicture
        if (dataObject.reviewScore != undefined) state.reviewScore = dataObject.reviewScore

        if (dataObject.address != undefined) {
            state.address.busStop = dataObject.address.busStop
            state.address.number = dataObject.address.number
            state.address.street = dataObject.address.street
            state.address.community = dataObject.address.community
            state.address.lga = dataObject.address.lga
            state.address.state = dataObject.address.state
            state.address.country = dataObject.address.country
        }

    }
}

export default {
    state,
    getters,
    actions,
    mutations
}