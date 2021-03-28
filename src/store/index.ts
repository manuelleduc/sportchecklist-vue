import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface Item {
  type: string,
  checklist: Array<string>,
}

export interface State {
  items: Array<Item>
}

const state: State = {
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
    },
    {
      type: 'test',
      checklist: []
    }
  ]

};
export default new Vuex.Store({
  state: state,
  mutations: {},
  actions: {},
  modules: {},
  getters: {}
})
