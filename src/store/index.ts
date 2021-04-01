import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export type ChecklistElement<S> = Record<string, S>

export interface Item {
  type: string,
  checklist: Array<ChecklistElement<string>>,
}

export interface State {
  items: Array<Item>
}

const state: State = {
  items: [
    {
      type: 'bike',
      checklist: [{'en': 'Loaded GPS', 'fr': 'GPS chargé'}]
    },
    {
      type: 'cyclist',
      checklist: [
        {'en': 'Helmet'}
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
