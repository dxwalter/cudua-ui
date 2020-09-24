export const state = () => ({
    products: []
})

// product name
// product id
// product price
// product review score
// product image url
// size number
// color code
// business name & username


const getDefaultState = () => {
    return {
        products: []
    }
}

export const actions = {
    resetCartState (context, state) { context.commit('resetCartState', state) },
}

export const getters = {}

export const mutations = {
    resetCartState: (state) => Object.assign(state, getDefaultState())
}

export default {
    state,
    getters,
    actions,
    mutations
}