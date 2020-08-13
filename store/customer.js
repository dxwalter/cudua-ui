import { gql } from 'graphql-request';

const state = () => ({
    userToken: "",
    fullname: "",
    anonymousId: ""
});

const actions = {
    async GetAnonymousIdFromApi({$graphql, params}, state) {
        const query = gql`
            query GetAnonymousId {
                anonymousId
                code
                success
                message
            }
        `;
        const getId = await this.$graphql.request(query);
        console.log(getId)
    }
}


const getters = {
    GetAnonymousId: state => state.anonymousId
}


const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}