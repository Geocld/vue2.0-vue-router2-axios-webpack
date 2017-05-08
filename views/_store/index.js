import Vue from 'vue';
import Vuex from 'vuex';
import storejs from 'storejs';

Vue.use(Vuex);

let local_infos = storejs.get('local_infos') ||
  {
    student: {name: '', age: ''},
    teacher: {name: '', age: ''},
    date: []
  };

const store = new Vuex.Store({
  state: {
    local_infos
  },

  mutations: {
    SET_LOCAL_INFOS: (state, item) => {
      state.local_infos[item.field] = item.value;
      storejs.set('local_infos', state.local_infos);
    }
  },

  actions: {
    SET_LOCAL_INFOS_STUDENT: ({commit}, student) => {
      commit('SET_LOCAL_INFOS', {field: 'student', value: student});
    },
    SET_LOCAL_INFOS_TEACHER: ({commit}, teacher) => {
      commit('SET_LOCAL_INFOS', {field: 'teacher', value: teacher});
    },
    SET_LOCAL_INFOS_DATE: ({commit}, date) => {
      commit('SET_LOCAL_INFOS', {field: 'date', value: date});
    }
  },

  getters: {}
});

export default store;
