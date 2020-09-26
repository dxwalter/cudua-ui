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

const actions = {
    resetCartState (context, state) { context.commit('resetCartState', state) },
    setCartItems (context, payload) { context.commit('setCartItems', payload)},
}

const getters = {
    GetCartItems: state => state.products
}

const mutations = {
    resetCartState: (state) => Object.assign(state, getDefaultState()),
    setCartItems: (state, data) => {
        state.products = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}