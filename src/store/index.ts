import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        type: 'Bike',
        checklist: [
          'Loaded GPS'
        ]
      },
      {
        type: 'Cyclist',
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
