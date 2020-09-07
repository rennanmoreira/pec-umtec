import * as API from '@/services/activities.services'

const state = () => ({
  activities: []
})

const getters = {
  activities: state => state.activities 
}

const actions = {
  fetchActivities: ({ commit }) => API.getActivities().then(({data}) => commit('SET_ACTIVITIES', data))
}

const mutations = {
  SET_ACTIVITIES: (state, data) => state.activities = data
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}