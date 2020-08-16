const state = () => ({
    userToken: "",
    fullname: "",
    email: "",
    phone: "",
    userId: "",
    displaPicture: "",
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
}


const mutations = {
    setAnonymousId: (state, id) => { state.anonymousId = id},
    changeLoginStatus: (state, status) => { state.isLoggedIn = status },
    setCustomerData: (state, dataObject) => {
        if (dataObject.fullname != undefined) state.fullname = dataObject.fullname
        if (dataObject.email != undefined) state.email = dataObject.email
        if (dataObject.userId != undefined) state.userId = dataObject.userId
        if (dataObject.userToken != undefined) state.userToken = dataObject.userToken
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}