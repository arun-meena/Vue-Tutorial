const state = () => ({
    user:  'Arun'
})
  
const getters = {
    user(state) {
      return state.user
    }
}

const mutations = {
    setUser(state, payload) {
      state.user = payload.user
    }
}
  
const actions = {
    userData({ commit }, payload) {
        console.log('--> In Store:', payload)
        commit('setUser', payload)
    }
}    

export default {
    state,
    getters,
    mutations,
    actions
}