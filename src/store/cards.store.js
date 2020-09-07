import * as API from '@/services/cards.services'

const state = () => ({
  cards: []
})

const getters = {
  cards: state => state.cards 
}

const actions = {
  fetchCards: ({ commit }) => API.getCards().then(({data}) => commit('SET_CARDS', data))
}

const mutations = {
  SET_CARDS: (state, data) => state.cards = data
}

export default {
  state,  
  getters,
  actions,
  mutations,
  namespaced: true
}