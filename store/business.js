export const state = () => ({
    all: [12, 23, 54]
});

export const mutations = {
    add(state, text) {
      state.all.push({
        text,
        done: false
      })
    }
}