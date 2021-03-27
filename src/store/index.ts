import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        type: 'bike',
        checklist: [
          'Loaded GPS'
        ]
      },
      {
        type: 'cyclist',
        checklist: [
          'Helmet'
        ]
      }
    ]

  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {}
})
