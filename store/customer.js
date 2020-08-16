import gql from 'graphql-tag'

const state = () => ({
    customer: {
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
    }
});

const actions = {
    async GetAnonymousIdFromApi({$graphql, params}) {
        const query = gql`
            query {
                GetAnonymousId{
                    anonymousId
                    code
                    success
                    message
                }
            }
        `;
        const getId = await this.$graphql.request(query);
        return getId.GetAnonymousId;
    }
}


const getters = {
    GetAnonymousId: state => state.customer.anonymousId,
    GetLoginStatus: state => state.customer.isLoggedIn,
}


const mutations = {
    setAnonymousId: (state, id) => { state.customer.anonymousId = id}
}

export default {
    state,
    getters,
    actions,
    mutations
}