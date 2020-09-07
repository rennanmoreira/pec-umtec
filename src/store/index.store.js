import Vue from 'vue'
import Vuex from 'vuex'
import cards from './cards.store'
import activities from './activities.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    activities
  }
})
