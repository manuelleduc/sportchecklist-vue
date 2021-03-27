import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({commit}) {
      setTimeout(() => commit('increment'), 1000)
    }
  },
  modules: {},
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodoCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
