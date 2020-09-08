import * as API from '@/services/cards.services'
import compareValues from '@/helpers/compareValues.helpers'



const countStatus = (state, status) => state.cards.filter(card => card.status === status).length

const state = () => ({
  cards: []
})

const getters = {
  cards: state => state.cards,
  countTotal: state => state.cards.length,
  countStatus: state => ({delayed: countStatus(state, 'DELAYED'), warning: countStatus(state, 'WARNING'), good: countStatus(state, 'GOOD')}),
  organizeByPrioritySLA: state => [...state.cards].sort(compareValues('days', 'desc')),
  organizeByReceiveDocuments: state => state.cards.filter(card => card.hasPendingDocument === true)
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